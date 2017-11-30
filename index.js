// 只针对移动端
;
(function (win, $) {
    $(function () {
        var clientWidth = $('.box')[0].offsetWidth;
        var start, move, end, curline;

        function setWidth() {
            $('.line').css('width', clientWidth + 100 + 'px');
            $('.line .con').css('width', clientWidth + 'px');
        }
        $('.box').on('touchstart', 'li', function (e) {
            var that = null,
                that = this;
            curline = null;
            var point = e.touches[0];
            start = {
                x: point.pageX,
                y: point.pageY
            };

            curline = $(that);
            curline.on('touchmove', function (e) {
                var that = null,
                    that = this;
                var point = e.touches[0];
                move = {
                    x: point.pageX,
                    y: point.pageY
                };
                var diffX = move.x - start.x;
                var diffY = move.y - start.y;

                if (diffX < 0) {
                    console.log("左滑动");
                    $(that).css('transform', 'translateX(' + diffX + 'px)')
                } else {
                    console.log("右滑动");
                    $(that).css('transform', 'translateX(' + 0 + 'px)')
                }
                console.log(diffX, diffY)
            });
            curline.on('touchend', function (e) {
                var that = null;
                that = this;
                var point = e.changedTouches[0];
                end = {
                    x: point.pageX,
                    y: point.pageY
                };
                var diffX = end.x - start.x;
                console.log(diffX, 'diffX')
                if (diffX < 0) {
                    if (Math.abs(diffX) > 50) {
                        $(that).css('transform', 'translateX(-100px)')
                    } else {
                        $(that).css('transform', 'translateX(' + 0 + 'px)')
                    }
                } else {
                    if (Math.abs(diffX) > 0) {
                        $(that).css('transform', 'translateX(' + 0 + 'px)')
                    }
                };
                $(that).find('.btn').click(function () {
                    $(that).remove()
                })
            })


        });


        // $('.box').on('touchmove', 'li', function (e) {
        //     var that = null,
        //         that = this;
        //     var point = e.touches[0];
        //     move = {
        //         x: point.pageX,
        //         y: point.pageY
        //     };
        //     var diffX = move.x - start.x;
        //     var diffY = move.y - start.y;

        //     if (diffX < 0) {
        //         console.log("左滑动");
        //         $(that).css('transform', 'translateX(' + diffX + 'px)')
        //     } else {
        //         console.log("右滑动");
        //         $(that).css('transform', 'translateX(' + diffX + 'px)')
        //     }
        //     console.log(diffX, diffY)

        // })
        // $('.box').on('touchmove', 'li', function (e) {
        //     var that = null;
        //     that = this;
        //     var point = e.changedTouches[0];
        //     end = {
        //         x: point.pageX,
        //         y: point.pageY
        //     };
        //     var diffX = end.x - start.x;
        //     console.log(diffX,'diffX')
        //     if (diffX < 0) {
        //         if (Math.abs(diffX) > 30) {
        //             $(that).css('transform', 'translateX(-100px)')
        //         } else {
        //             $(that).css('transform', 'translateX(' + 0 + 'px)')
        //         }
        //     }else{
        //         if (Math.abs(diffX) > 30){
        //             $(that).css('transform', 'translateX(' + 0 + 'px)')
        //         }
        //     };
        //     $(that).find('.btn').click(function(){
        //        $(that).remove()
        //     })

        // })



        setWidth();
    })
})(window, $)