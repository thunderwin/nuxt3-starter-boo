export const useSeo = () => {
    const config = useRuntimeConfig().public;
    const route = useRoute();
    const appUrl = config.APP_BASE_URL;
    const { locale } = useI18n();  // 添加 i18n 支持


    // 新增：服务端渲染方式
    const updateSeoMeta = (metadata) => {
        useSeoMeta({
            // 基础 SEO
            title: () => metadata?.seo_title,
            description: () => metadata?.seo_description,

            // Open Graph
            ogTitle: () => metadata?.seo_title,
            ogDescription: () => metadata?.seo_description,
            ogImage: () => metadata?.seo_image ?? `${appUrl}/nuxt-logo.svg`,
            ogUrl: () => `${appUrl}${route.path}`,
            ogType: () => metadata?.seo_type || 'website',
            ogLocale: () => locale.value?.iso?.replace('-', '_') || 'en_US',

            // Twitter Card
            twitterCard: () => 'summary',
            twitterTitle: () => metadata?.seo_title,
            twitterDescription: () => metadata?.seo_description,
            twitterImage: () => metadata?.seo_image ?? `${appUrl}/nuxt-logo.svg`,

            // 规范链接
            canonical: () => `${appUrl}${route.path}`,

            // 多语言 SEO
            languageAlternates: () => [
                { hrefLang: 'x-default', href: `${appUrl}${route.path}` },
                { hrefLang: 'en', href: `${appUrl}/en${route.path}` },
                { hrefLang: 'zh', href: `${appUrl}/zh${route.path}` }
            ],
        });

        useHead({
            htmlAttrs: {
                lang: locale.value
            }
        });
    }

    return {
        updateSeoMeta   // 新增服务端渲染方法
    }
}