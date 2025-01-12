export const useStrapi = () => {
  const config = useRuntimeConfig()
  const { locale } = useI18n()

  const fetchAPI = async (endpoint, options = {}) => {
    try {
      const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`
      
      // 构建查询参数
      const queryParams = new URLSearchParams()
      queryParams.append('locale', locale.value)
      
      if (options.query) {
        // 特殊处理 filters 和其他嵌套对象
        Object.entries(options.query).forEach(([key, value]) => {
          if (key === 'filters') {
            // 处理 filters 对象
            Object.entries(value).forEach(([filterKey, filterValue]) => {
              if (typeof filterValue === 'object') {
                Object.entries(filterValue).forEach(([operator, operatorValue]) => {
                  queryParams.append(`filters[${filterKey}][${operator}]`, operatorValue)
                })
              } else {
                queryParams.append(`filters[${filterKey}]`, filterValue)
              }
            })
          } else {
            // 处理其他参数
            queryParams.append(key, value)
          }
        })
      }

      const url = `${config.public.API_BASE_URL}/api${path}?${queryParams.toString()}`

      const defaultOptions = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { query, ...restOptions } = options

      const response = await $fetch(url, {
        ...defaultOptions,
        ...restOptions,
      })

      return response.data || response

    } catch (error) {
      console.error('API 请求错误:', error)
      if (error.response) {
        const status = error.response.status
        if (status === 401) {
          throw new Error('未授权访问')
        } else if (status === 404) {
          throw new Error('请求的资源不存在')
        }
      }
      throw error
    }
  }

  return {
    fetchAPI,
  }
} 