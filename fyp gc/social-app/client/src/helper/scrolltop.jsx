import $ from 'jquery'

export const scrollTop = () => {
    $(document).ready(function () {
        $(window).scrollTop(0);
    })
}