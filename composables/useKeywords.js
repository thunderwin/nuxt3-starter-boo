export const useKeywords = () => {
    const { fetchAPI } = useStrapi()

    const getKeyword = async (url) => {
        const res = await fetchAPI('/keywords', {
            query: {
                populate: '*',
                filters: {
                    url: {
                        $eq: url
                    }
                }
            }
        })
        if (res.length > 0) {
            const content = res[0].attributes
            return {
                ...content,
                id: res[0].id
            }
        }
        return null
    }
    return { getKeyword }
} 