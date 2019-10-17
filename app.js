//Created simple plugin to detect touchstart
;(function($){
    $.fn.extend({  touch: function(func) {  return this.each(function() { 	this.addEventListener("touchstart",func)   });  }   });
})(jQuery);

$(function(){
    let objNav = jQuery("#site-navigation");
    let objFooter = jQuery("#site-footer");

    objNav.html(`
            <div class="primary-navigation">
                <div class="left-nav-menu">
                    <ul class="nav-menu" >
                        <li class="menu-head"><a href="#">Yvette's recipes</a>
                            <ul id="sub-menu0" class="sub-menu left">
                                <li class="menu-item"><a href="https://freedomalliance.org/programs/outdoor-adventures/">Chocolate Chip Cookies</a></li>
                                <li class="menu-item"><a href="https://freedomalliance.org/programs/outdoor-adventures/">Apple Pie</a></li>
                                <li class="menu-item"><a href="https://freedomalliance.org/programs/outdoor-adventures/">Brownies</a></li>
                                <li class="menu-item"><a href="https://freedomalliance.org/programs/outdoor-adventures/">Pecan Cookies</a></li>
                            </ul>
                        </li>
                        <li class="menu-head"><a href="https://freedomalliance.org/programs/scholarship-fund/">Fun facts</a>
                            <ul id="sub-menu1" class="sub-menu middle">
                                <li class="menu-item"><a href="https://freedomalliance.org/programs/outdoor-adventures/">A stitch in time facts</a></li>
                                <li class="menu-item"><a href="https://freedomalliance.org/programs/outdoor-adventures/">A rolling stone facts</a></li>
                                <li class="menu-item"><a href="https://freedomalliance.org/programs/outdoor-adventures/">A shot in the dark facts</a></li>
                            </ul>
                        </li>
                        <li class="menu-head"><a href="https://freedomalliance.org/highlights/">Vaccine News</a>
                            <ul id="sub-menu2" class="sub-menu right">
                                <li class="menu-item"><a href="https://freedomalliance.org/press-releases/">Pharma scandals</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div id="logo" class="logo red"><a href="index.html"><img src="img/logo-red.svg" alt="Virginians for Liberty & Justice"></a></div>
                <div class="right-nav-menu">
                    <ul class="nav-menu" >
                        <li class="menu-head"><a href="#">Yvette's sayings</a>
                            <ul id="sub-menu3" class="sub-menu left">
                                <li class="menu-item"><a href="https://freedomalliance.org/programs/outdoor-adventures/">A stitch in time</a></li>
                                <li class="menu-item"><a href="https://freedomalliance.org/programs/outdoor-adventures/">A rolling stone</a></li>
                                <li class="menu-item"><a href="https://freedomalliance.org/programs/outdoor-adventures/">A shot in the dark</a></li>
                            </ul>
                        </li>
                        <li class="menu-head"><a href="https://freedomalliance.org/programs/scholarship-fund/">Scholarship Fund</a>
                            <ul id="sub-menu4" class="sub-menu middle">
                                <li class="menu-item"><a href="https://freedomalliance.org/press-releases/">Pharma scandals fund</a></li>
                                <li class="menu-item"><a href="https://freedomalliance.org/press-releases/">Government scandals fund</a></li>
                            </ul>
                        </li>
                        <li class="menu-head"><a href="https://freedomalliance.org/highlights/">News</a>
                            <ul id="sub-menu5" class="sub-menu right">
                                <li class="menu-item"><a href="https://freedomalliance.org/press-releases/">Press Releases</a></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>       
    `);

    objFooter.html(`
            <a class="contact" href="https://searchconservative.com/">Contact Us</a>
            <a class="home" href="index.html">Main Index</a>
            <a class="donate" href="https://www.paypal.com/us/home">Help us fund our next public event!</a>
    `);

    let objMenuHead = jQuery(".menu-head");
    let objLogo = jQuery("#logo");

    objMenuHead.mouseover(function(){
        jQuery("#sub-menu" + objMenuHead.index(this).toString()).addClass("show");
    });

    objMenuHead.mouseleave(function(){
        jQuery("#sub-menu" + objMenuHead.index(this).toString()).removeClass("show");
    });

    /*objLogo.mousedown(function() {
        if (objLogo.hasClass("red")) {
            objLogo.find("img").attr("src", "img/logo-blue.svg");
            objLogo.removeClass("red");
            objLogo.addClass("blue");
        } else if (objLogo.hasClass("blue")) {
            objLogo.find("img").attr("src", "img/logo-flag.svg");
            objLogo.removeClass("blue");
        } else {
            objLogo.find("img").attr("src", "img/logo-red.svg");
            objLogo.addClass("red");
        }
    })
    */
});