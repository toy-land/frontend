import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export default createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Spoqa Han Sans';
        font-weight: 700;
        src: local('Spoqa Han Sans Bold'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff') format('woff'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Spoqa Han Sans';
        font-weight: 500;
        src: local('Spoqa Han Sans Medium'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff') format('woff'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Spoqa Han Sans';
        font-weight: 400;
        src: local('Spoqa Han Sans Regular'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff') format('woff'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Spoqa Han Sans';
        font-weight: 300;
        src: local('Spoqa Han Sans Light'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.woff') format('woff'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Spoqa Han Sans';
        font-weight: 100;
        src: local('Spoqa Han Sans Thin'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.woff') format('woff'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 700;
        src: local('Spoqa Han Sans Bold'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff') format('woff'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 500;
        src: local('Spoqa Han Sans Medium'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff') format('woff'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 400;
        src: local('Spoqa Han Sans Regular'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff') format('woff'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 300;
        src: local('Spoqa Han Sans Light'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.woff') format('woff'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.ttf') format('truetype');
    }

    @font-face {
        font-family: 'Spoqa Han Sans Neo';
        font-weight: 100;
        src: local('Spoqa Han Sans Thin'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.woff2') format('woff2'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.woff') format('woff'), url('https://cdn.jsdelivr.net/gh/spoqa/spoqa-han-sans@3.1.0/Subset/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.ttf') format('truetype');
    }

    @font-face {
        font-family: 'S-CoreDream-1';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-1Thin.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'S-CoreDream-2';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-2ExtraLight.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'S-CoreDream-3';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'S-CoreDream-4';
        src: url(‘https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-4Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'S-CoreDream-5';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-5Medium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'S-CoreDream-6';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'S-CoreDream-7';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-7ExtraBold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'S-CoreDream-8';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-8Heavy.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'S-CoreDream-9';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-9Black.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    body {
        font-family: 'Spoqa Han Sans';
        font-size: 62.5% !important;
        background-color: black;
    }
`;
