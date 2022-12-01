/*!
 * Panda Lazy v1.0.0
 * https://github.com/pandatemplates/panda-lazy
 *
 * Copyright 2022 PandaTemplates and other contributors
 * Released under the MIT license
 */
! function (a) {
    a.fn.pandalazy = function() {
        return this.each(function() {
            var b = a(this),
			    t = a(window),
                c = b.attr("data-src"),
                d = Math.round(b.width() + b.width() / 10),
                e = Math.round(b.height() + b.height() / 10),
                f = "w" + d + "-h" + e + "-p-k-no-nu";
				if (c.match("resources.blogblog.com")) {
					if (typeof noThumbnail != "undefined") {
						c = noThumbnail
					} else {
						c = "//lh3.googleusercontent.com/-bwpaV70MWro/Y3E8wIpzRmI/AAAAAAAAAJc/RVTl5r5LgnMxSAM1zaqcSTu2IIJEE9OKwCNcBGAsYHQ/s72-c/panda-nth.png"
					}
				}
				if (c.includes("googleusercontent.com")) {
					if (c.includes("=")) {
						const parts = c.split("=");
						if (parts[1].trim()) c = parts[0] + "=w72-h72-p-k-no-nu";
					} else {
						c += "=w74-h74-p-k-no-nu";
					}
				}
            var h = {
                    "/s72-c": ["/s72-c", "/" + f],
                    "/w72-h": ["/w72-h72-p-k-no-nu", "/" + f],
                    "=w72-h": ["=w72-h72-p-k-no-nu", "=" + f]
                },
                s = c;
			for (var r in h) {
				if (c.match(r)) {
					s = c.replace(h[r][0], h[r][1]);
					break
				}
			}
            b.is(":hidden") || t.on("load resize scroll", function a() {
				var c = t.height(),
                    d = t.scrollTop(),
                    e = b.offset().top;
                if (d + c > e) {
					t.off("load resize scroll", a), 
					b.attr("src", "" + s).addClass("panda-lazy")
				}
            }).trigger("scroll")
        });
    }
}(jQuery);
