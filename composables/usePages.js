export const usePages = () => {
    const { fetchAPI } = useStrapi()

    const getPage = async (url) => {
        return await fetchAPI('/pages', {
            query: {
                populate: '*',
                filters: {
                    url: {
                        $eq: url
                    }
                }
            }
        })
    }

    const getPages = async () => {
        return await fetchAPI('/pages', {
            query: {
                populate: '*',
                sort: 'createdAt:desc',
            }
        })
    }

    return { getPage, getPages }
} 