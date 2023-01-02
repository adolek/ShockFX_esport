<!-------------------------------------------------------------
* Association: ShockFX Esport
* Site web: https://shockfx-esport.com
*
* Auteur: My Web Maker, https://mywebmaker.fr
-------------------------------------------------------------->

<?php

session_start();

    ///SERVEUR WEB///
    //identifier votre BDD
    $database = "dbs5139985";
    //identifier votre serveur (localhost), utlisateur (root), mot de passe ("")
    $db_handle = mysqli_connect('db5006144064.hosting-data.io', 'dbu2599629', 'wyh@-uc4FBDc2R@');
    $db_found = mysqli_select_db($db_handle, $database);

if(isset($_POST['mailform']))
{
$nom = isset($_POST["nom"])? $_POST["nom"] : "";
$email = isset($_POST["email"])? $_POST["email"] : "";
$message = isset($_POST["message"])? $_POST["message"] : "";

$mail = '
<html>
 <head>
  <title>New Form Submission</title>
 </head>
 <body>
 <div>
 Nom : ';
 $mail.=$nom;
 $mail.=
 '
 <br/><br/>
 Email : ';
 $mail.=$email;
 $mail.=
 '
 <br/><br/>
 Message : ';
 $mail.=$message;
 $mail.=
 '
 </div>
 </body>
</html>
';

$header="MIME-Version: 1.0\r\n";
$header.='Content-Type:text/html; charset="uft-8"'."\n";
$header.='Content-Transfer-Encoding: 8bit';

mail("contact@shockfx-esport.com", "New Form Submission", $mail, $header);
}

$sql = "SELECT * FROM `palmares` WHERE position = 1 OR position = 2 OR position=3";
  $result = mysqli_query($db_handle, $sql);
 
 while ($pod = mysqli_fetch_assoc($result)) {
  $pods[]=$pod;
  
 }//end while
 $podiums = sizeof($pods);

 
$sql = "SELECT * FROM `membres`";
$result = mysqli_query($db_handle, $sql);

while ($jou = mysqli_fetch_assoc($result)) {
$jous[]=$jou;

}//end while
$joueurs = sizeof($jous);

$sql = "SELECT * FROM `matchs` WHERE finish = 0 AND type = 'shockfx' ORDER BY `matchs`.`dateReel` DESC";
$result = mysqli_query($db_handle, $sql);

while ($temp = mysqli_fetch_assoc($result)) {
$temps[]=$temp;
}

$sql = "SELECT * FROM `matchs` WHERE finish = 1 AND type = 'shockfx' ORDER BY `matchs`.`dateReel` DESC";
$result = mysqli_query($db_handle, $sql);

while ($tempp = mysqli_fetch_assoc($result)) {
$tempps[]=$tempp;
}

$comings = [];
for ($i=0; $i<4; $i++) {
     $comings[$i]=$temps[$i];   
    }

$finishs = [];
for ($i=0; $i<4; $i++) {
     $finishs[$i]=$tempps[$i];   
    }

    $sql = "SELECT * FROM `games`";
    $result = mysqli_query($db_handle, $sql);
    
    while ($game = mysqli_fetch_assoc($result)) {
    $games[]=$game;
    
    }//end while

?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Accueil - ShockFX Esport</title>

    <meta content="Club esport français évoluant sur les jeux FIFA, Apex Legends, CSGO, LOL, Rocket League, Hearthstone, Fortnite, Clash Royale et Brawl Stars. Sponsors & partenaires : CIC, MyWebMaker, LMN8." name="description">
    <meta content="shockfx-esport; shockfx esport; shockfx; shock fx; club esport français; club esport france; team esport française; team esport france" name="keywords">

    <link rel="icon" href="images site/logo32.png" />
    <link rel="apple-touch-icon" href="images site/logo32.png"/>

    <script type="text/javascript" src="assets/js/revolution/extensions/revolution.extension.slideanims.min.js"></script>
    <script type="text/javascript" src="assets/js/revolution/extensions/revolution.extension.layeranimation.min.js"></script>
    <script type="text/javascript" src="assets/js/revolution/extensions/revolution.extension.kenburn.min.js"></script>
    <script type="text/javascript" src="assets/js/revolution/extensions/revolution.extension.navigation.min.js"></script>
    <script type="text/javascript" src="assets/js/revolution/extensions/revolution.extension.parallax.min.js"></script>


    <script data-cfasync="false" data-pagespeed-no-defer type="text/javascript">//<![CDATA[
        var gtm4wp_datalayer_name = "dataLayer";
        var dataLayer = dataLayer || [];
//]]>
    </script>
   
    <script type="text/javascript">
        window._wpemojiSettings = { "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/13.0.0\/72x72\/", "ext": ".png", "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/13.0.0\/svg\/", "svgExt": ".svg", "source": { "concatemoji": "https:\/\/playerx.qodeinteractive.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.5.3" } };
        !function (e, a, t) { var r, n, o, i, p = a.createElement("canvas"), s = p.getContext && p.getContext("2d"); function c(e, t) { var a = String.fromCharCode; s.clearRect(0, 0, p.width, p.height), s.fillText(a.apply(this, e), 0, 0); var r = p.toDataURL(); return s.clearRect(0, 0, p.width, p.height), s.fillText(a.apply(this, t), 0, 0), r === p.toDataURL() } function l(e) { if (!s || !s.fillText) return !1; switch (s.textBaseline = "top", s.font = "600 32px Arial", e) { case "flag": return !c([127987, 65039, 8205, 9895, 65039], [127987, 65039, 8203, 9895, 65039]) && (!c([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819]) && !c([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447])); case "emoji": return !c([55357, 56424, 8205, 55356, 57212], [55357, 56424, 8203, 55356, 57212]) }return !1 } function d(e) { var t = a.createElement("script"); t.src = e, t.defer = t.type = "text/javascript", a.getElementsByTagName("head")[0].appendChild(t) } for (i = Array("flag", "emoji"), t.supports = { everything: !0, everythingExceptFlag: !0 }, o = 0; o < i.length; o++)t.supports[i[o]] = l(i[o]), t.supports.everything = t.supports.everything && t.supports[i[o]], "flag" !== i[o] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[i[o]]); t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag, t.DOMReady = !1, t.readyCallback = function () { t.DOMReady = !0 }, t.supports.everything || (n = function () { t.readyCallback() }, a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n), a.attachEvent("onreadystatechange", function () { "complete" === a.readyState && t.readyCallback() })), (r = t.source || {}).concatemoji ? d(r.concatemoji) : r.wpemoji && r.twemoji && (d(r.twemoji), d(r.wpemoji))) }(window, document, window._wpemojiSettings);
    </script>
    <style type="text/css">
        img.wp-smiley,
        img.emoji {
            display: inline !important;
            border: none !important;
            box-shadow: none !important;
            height: 1em !important;
            width: 1em !important;
            margin: 0 .07em !important;
            vertical-align: -0.1em !important;
            background: none !important;
            padding: 0 !important;
        }


        .language-container {
            position: absolute;
            top: 45px;

        }

        .language-container a {
            color: #fff;
            display: inline-block;
            box-sizing: border-box;
            width: 28px;
            height: 20px;
            text-align: center;
            line-height: 20px;
        }

        .language-container a:hover,
        .language-container a.active {
            background: #ff0e1f;
            color: #fff;
            font-family: "Psg-bold", 'Arial Black', sans-serif;
            text-decoration: none;
            transform: scaleY(1.04);
        }

        @media only screen and (max-width: 770px) {
            .language-container {
                top: 43px;
                right: 54px;
            }

            .language-container a {
                font-size: 18px;
            }
        }

        @media only screen and (max-width: 420px) {
            .language-container {
                right: 15px;
                top: 25px;
            }

            .language-container a {
                display: block;
            }

            .language-container a:first-child {
                margin-bottom: 15px;
            }
        }

        @media only screen and (min-width: 771px) {
            .page-header {
                height: 128px;
            }

            #header-nav {
                border-bottom: none;
                position: relative;
                bottom: 30px;
            }
        }
    </style>

    <link href="boxicons/css/boxicons.min.css" rel="stylesheet">

    <link rel="stylesheet" href="assets/css/1.css" media="all" />
    <link rel='stylesheet' id='rabbit_css-css'
        href='https://export.qodethemes.com/_toolbar/assets/css/rbt-modules.css?ver=5.5.3' type='text/css'
        media='all' />
    <link rel="stylesheet" href="assets/css/2.css" media="all" />
    <style id='rs-plugin-settings-inline-css' type='text/css'>
        #rs-demo-id {}
    </style>

    <link rel="stylesheet" href="assets/css/3.css" media="all" />
    <style id='playerx-edge-woo-inline-css' type='text/css'>
        .page-id-6 .edgtf-content .edgtf-content-inner>.edgtf-container>.edgtf-container-inner,
        .page-id-6 .edgtf-content .edgtf-content-inner>.edgtf-full-width>.edgtf-full-width-inner {
            padding: 0;
        }

        @media only screen and (max-width: 1024px) {

            .page-id-6 .edgtf-content .edgtf-content-inner>.edgtf-container>.edgtf-container-inner,
            .page-id-6 .edgtf-content .edgtf-content-inner>.edgtf-full-width>.edgtf-full-width-inner {
                padding: 0;
            }
        }

        .page-id-6 .edgtf-content .edgtf-content-inner>.edgtf-container>.edgtf-container-inner,
        .page-id-6 .edgtf-content .edgtf-content-inner>.edgtf-full-width>.edgtf-full-width-inner {
            padding: 0;
        }

        @media only screen and (max-width: 1024px) {

            .page-id-6 .edgtf-content .edgtf-content-inner>.edgtf-container>.edgtf-container-inner,
            .page-id-6 .edgtf-content .edgtf-content-inner>.edgtf-full-width>.edgtf-full-width-inner {
                padding: 0;
            }
        }

        .page-id-6 .edgtf-page-header .edgtf-menu-area {
            height: 120px !important;
            box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.35);
        }
    </style>
    <link rel="stylesheet" href="assets/css/4.css" media="all" />
    <link rel='stylesheet' id='playerx-edge-google-fonts-css'
        href='https://fonts.googleapis.com/css?family=Rubik%3A300%2C400%2C500%2C700&#038;subset=latin-ext&#038;ver=1.0.0'
        type='text/css' media='all' />
    <!--[if lt IE 9]>
<link rel='stylesheet' id='vc_lte_ie9-css'  href='https://playerx.qodeinteractive.com/wp-content/plugins/js_composer/assets/css/vc_lte_ie9.min.css' type='text/css' media='screen' />
<![endif]-->
    <link rel="stylesheet" href="assets/css/5.css" media="all" />
    <style id='js_composer_front-inline-css' type='text/css'>
        .vc_custom_1530543022555 {
            padding-top: 300px !important;
            padding-bottom: 133px !important;
        }

        @media only screen and (max-width:1024px) {
            .vc_custom_1530543022555 {
            padding-top: 220px !important;
            }
        }

        .vc_custom_1530543071906 {
            padding-top: 131px !important;
            padding-bottom: 141px !important;
        }

        .vc_custom_1529567793848 {
            background-position: center !important;
            background-repeat: no-repeat !important;
            background-size: cover !important;
        }

        .vc_custom_1530543083826 {
            padding-top: 132px !important;
            padding-bottom: 140px !important;
        }

        .vc_custom_1530542080210 {
            padding-top: 230px !important;
            padding-bottom: 170px !important;
        }

        .vc_custom_1530543112680 {
            padding-bottom: 114px !important;
        }

        .vc_custom_1529997028030 {
            padding-right: 10px !important;
            padding-bottom: 10px !important;
            padding-left: 10px !important;
        }

        .vc_custom_1530543135289 {
            padding-top: 122px !important;
            padding-bottom: 111px !important;
        }

        .vc_custom_1529910901070 {
            margin-top: -140px !important;
        }

        .vc_custom_1528296369765 {
            margin-top: -6.5% !important;
            padding-left: 7.7% !important;
        }


    </style>
    <link rel="stylesheet" href="assets/css/6.css" media="all" />
    <script src="assets/js/2.js"></script>

    <script src="assets/js/9.js"></script>


    <link rel="canonical" href="https://mywebmaker.fr/shockfx/" />
    <link rel='shortlink' href='https://mywebmaker.fr/shockfx/'/>


    <script type="text/javascript">function setREVStartSize(e) {
            try {
                e.c = jQuery(e.c); var i = jQuery(window).width(), t = 9999, r = 0, n = 0, l = 0, f = 0, s = 0, h = 0;
                if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function (e, f) { f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e) }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) { var u = (e.c.width(), jQuery(window).height()); if (void 0 != e.fullScreenOffsetContainer) { var c = e.fullScreenOffsetContainer.split(","); if (c) jQuery.each(c, function (e, i) { u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0)) } f = u } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight); e.c.closest(".rev_slider_wrapper").css({ height: f })
            } catch (d) { console.log("Failure at Presize of Slider:" + d) }
        };</script>

</head>

<body
    class="home page-template page-template-full-width page-template-full-width-php page page-id-6 playerx-core-1.0.2 woocommerce-no-js playerx-ver-1.5 edgtf-smooth-page-transitions edgtf-smooth-page-transitions-fadeout edgtf-grid-1200 edgtf-content-is-behind-header edgtf-wide-dropdown-menu-content-in-grid edgtf-sticky-header-on-scroll-down-up edgtf-dropdown-slide-from-bottom edgtf-header-divided edgtf-menu-area-in-grid-shadow-disable edgtf-menu-area-border-disable edgtf-menu-area-in-grid-border-disable edgtf-logo-area-border-disable edgtf-header-vertical-shadow-disable edgtf-header-vertical-border-disable edgtf-side-menu-slide-from-right edgtf-woocommerce-columns-3 edgtf-woo-normal-space edgtf-woo-pl-info-below-image edgtf-woo-single-thumb-on-left-side edgtf-woo-single-has-pretty-photo edgtf-default-mobile-header edgtf-sticky-up-mobile-header edgtf-fullscreen-search edgtf-search-fade wpb-js-composer js-comp-ver-6.0.3 vc_responsive"
    itemscope itemtype="http://schema.org/WebPage">

            <header class="edgtf-page-header">
                <div class="edgtf-menu-area">
                    <div class="edgtf-vertical-align-containers">
                        <div class="edgtf-position-left">

                            <div class="edgtf-position-left-inner">
                                <div class="edgtf-divided-left-inner-border-holder"></div>
                                <div class="edgtf-divided-left-inner-top-widget-area">
                                    <div class="edgtf-divided-left-inner-top-widget-area-inner">
                                        <div id="text-2"
                                            class="widget widget_text edgtf-header-divided-left-top-widget-area">
                                            <div class="textwidget">
                                                <p><span style="margin-right:26px">nos réseaux :</span></p>
                                            </div>
                                        </div>
                                        <div class="widget edgtf-social-icons-group-widget text-align-right">

                                            <a class="edgtf-social-icon-widget-holder edgtf-icon-has-hover"
                                                style="font-size: 13px;margin: 0 12px;"
                                                href="https://discord.gg/cn5vmErMVZ" target="_blank">
                                                <span class="edgtf-social-icon-widget bx bxl-discord"></span>
                                            </a>
                                            <a class="edgtf-social-icon-widget-holder edgtf-icon-has-hover"
                                                style="font-size: 13px;margin: 0 12px;"
                                                href="https://twitter.com/ShockfxEsport" target="_blank">
                                                <span class="edgtf-social-icon-widget bx bxl-twitter"></span>
                                            </a>
                                            <a class="edgtf-social-icon-widget-holder edgtf-icon-has-hover"
                                                style="font-size: 13px;margin: 0 12px;"
                                                href="https://www.youtube.com/user/Stephou5430" target="_blank">
                                                <span class="edgtf-social-icon-widget bx bxl-youtube"></span> </a>
                                            <a class="edgtf-social-icon-widget-holder edgtf-icon-has-hover"
                                                style="font-size: 13px;margin: 0 12px;"
                                                href="https://www.instagram.com/shockfx.esport/" target="_blank">
                                                <span class="edgtf-social-icon-widget bx bxl-instagram"></span> </a>
                                            <a class="edgtf-social-icon-widget-holder edgtf-icon-has-hover"
                                                style="font-size: 13px;margin: 0 12px;" href="https://www.twitch.tv/shockfxesport"
                                                target="_blank">
                                                <span class="edgtf-social-icon-widget bx bxl-twitch"></span> </a>
                                        </div>
                                    </div>
                                </div>
                                <nav class="edgtf-main-menu edgtf-drop-down edgtf-divided-left-part edgtf-default-nav">
                                    <ul id="menu-divided-left-navigation" class="clearfix">
                                        <li id="nav-menu-item-238"
                                            class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children edgtf-active-item has_sub narrow">
                                            <a href="#" class=" current "><span class="item_outer"><span
                                                        class="item_text">Accueil</span><i
                                                        class="edgtf-menu-arrow fa fa-angle-down"></i></span></a>

                                        </li>
                                        <li id="nav-menu-item-239"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow">
                                            <a href="teams.php"><span class="item_outer"><span
                                                        class="item_text">Equipes</span><i
                                                        class="edgtf-menu-arrow fa fa-angle-down"></i></span></a>
                                            <div class="second">
                                                <div class="inner">
                                                    <ul>
                                                    <?php foreach($games as $game):?>    
                                                        <li id="nav-menu-item-2798"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page ">
                                                            <a href="roster.php?id=<?php echo $game['abr']; ?>"
                                                               ><span class="item_outer"><span
                                                                        class="item_text"><?php echo $game['nom']; ?> </span></span></a>
                                                        </li>
                                                    <?php endforeach ?>
                                                        
                                                       
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li id="nav-menu-item-240"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow">
                                            <a href="" class=""><span class="item_outer"><span
                                                        class="item_text">Matchs</span><i
                                                        class="edgtf-menu-arrow fa fa-angle-down"></i></span></a>
                                            <div class="second">
                                                <div class="inner">
                                                    <ul>
                                                    <?php foreach($games as $game):?>    
                                                        <li id="nav-menu-item-2798"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page ">
                                                            <a href="matchs.php?id=<?php echo $game['abr']; ?>"
                                                               ><span class="item_outer"><span
                                                                        class="item_text"><?php echo $game['nom']; ?> </span></span></a>
                                                        </li>
                                                    <?php endforeach ?>
                                                       
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </nav>
                               
                            </div>
                        </div>
                        <div class="edgtf-position-center">
                            <div class="edgtf-position-center-inner"
                                style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://besthqwallpapers.com/Uploads/20-12-2018/75086/thumb2-gray-metal-pattern-4k-metal-texture-dark-metal-gray-metal-background.jpg);">
                                <div class="edgtf-logo-wrapper">
                                    <a itemprop="url" href="#" style="height: 84px;">
                                        <img itemprop="image" class="edgtf-normal-logo"
                                            src="images site/logo-sfx1.png"
                                            width="169" height="168" alt="logo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="edgtf-position-right">
                            <div class="edgtf-position-right-inner">
                                <div class="edgtf-divided-right-inner-border-holder"></div>
                                <div class="edgtf-divided-right-inner-top-widget-area">
                                    <div class="edgtf-divided-right-inner-top-widget-area-inner">
                                        <div class="widget edgtf-header-divided-right-top-widget-area">

                                            <a class="edgtf-social-icon-widget-holder edgtf-icon-has-hover"
                                                style="font-size: 13px;margin: 0 12px; margin-left: 60px;"
                                                href="mailto:contact@shockfx-esport.com" target="_blank">
                                                <span class="edgtf-social-icon-widget">contact@shockfx-esport.com</span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                                <nav class="edgtf-main-menu edgtf-drop-down edgtf-divided-right-part edgtf-default-nav">
                                    <ul id="menu-divided-right-navigation" class="clearfix">
                                        <li id="nav-menu-item-243"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow">
                                            <a href="https://eliminate.fr/categorie-produit/shock-fx/" class=""><span class="item_outer"><span
                                                        class="item_text">Shop</span><i
                                                        class="edgtf-menu-arrow fa fa-angle-down"></i></span></a>
                                            
                                        </li>
                                        <li id="nav-menu-item-243"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow">
                                            <a href="#" class=""><span class="item_outer"><span class="item_text">Le
                                                        Club</span><i
                                                        class="edgtf-menu-arrow fa fa-angle-down"></i></span></a>
                                            <div class="second">
                                                <div class="inner">
                                                    <ul>
                                                    <li id="nav-menu-item-1780"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page ">
                                                            <a href="roster.php?id=staff"
                                                                class=""><span class="item_outer"><span
                                                                        class="item_text">Staff</span></span></a>
                                                        </li>
                                                        <li id="nav-menu-item-1780"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page ">
                                                            <a href="sponsors.php"
                                                                class=""><span class="item_outer"><span
                                                                        class="item_text">Sponsors</span></span></a>
                                                        </li>
                                                        <li id="nav-menu-item-1781"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page ">
                                                            <a href="recrutement.php"
                                                                class=""><span class="item_outer"><span
                                                                        class="item_text">Recrutement</span></span></a>
                                                        </li>

                                                        <li id="nav-menu-item-1596"
                                                             class="menu-item menu-item-type-post_type menu-item-object-page ">
                                                            <a href="hall-of-fame.php" class=""><span
                                                                    class="item_outer"><span
                                                                        class="item_text">Palmarès</span></span></a>

                                                        </li>

                                                        <!--<li id="nav-menu-item-1596"
                                                             class="menu-item menu-item-type-post_type menu-item-object-page ">
                                                            <a href="us_louviers.php" class=""><span
                                                                    class="item_outer"><span
                                                                        class="item_text">ShockFX & US Louviers</span></span></a>

                                                        </li>-->
                                                    

                                                </div>
                                            </div>
                                        </li>

                                        <li id="nav-menu-item-246"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow">
                                            <a href="contact-us.php" class=""><span class="item_outer"><span
                                                        class="item_text">Contact</span><i
                                                        class="edgtf-menu-arrow fa fa-angle-down"></i></span></a>

                                        </li>
                                    </ul>
                                </nav>
                               
                            </div>

                            <div class="edgtf-divided-right-widget-area">
                                <div class="edgtf-divided-right-widget-area-inner">
                                    <div class="language-container">
                                        <a class=" active"
                                            href="#">FR</a>
                                        <a class=""
                                            href="en/index.php">EN</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="edgtf-sticky-header">
                    <div class="edgtf-sticky-holder">
                        <div class="edgtf-vertical-align-containers">
                            <div class="edgtf-position-left">

                                <div class="edgtf-position-left-inner">
                                    <nav
                                        class="edgtf-main-menu edgtf-drop-down edgtf-divided-left-part edgtf-sticky-nav">
                                        <ul id="menu-divided-left-navigation-1" class="clearfix">
                                            <li id="sticky-nav-menu-item-238"
                                                class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children edgtf-active-item has_sub narrow">
                                                <a href="index.php" class=" current "><span class="item_outer"><span
                                                            class="item_text">Accueil</span><span class="plus"></span><i
                                                            class="edgtf-menu-arrow fa fa-angle-down"></i></span></a>

                                            </li>
                                            <li id="sticky-nav-menu-item-239"
                                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow">
                                                <a href="teams.php" class=""><span class="item_outer"><span
                                                            class="item_text">Equipes</span><span class="plus"></span><i
                                                            class="edgtf-menu-arrow fa fa-angle-down"></i></span></a>
                                                <div class="second">
                                                    <div class="inner">
                                                        <ul>
                                                        <?php foreach($games as $game):?>    
                                                        <li id="sticky-nav-menu-item-242"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page ">
                                                            <a href="roster.php?id=<?php echo $game['abr']; ?>"
                                                               ><span class="item_outer"><span
                                                                        class="item_text"><?php echo $game['nom']; ?> </span><span
                                                                            class="plus"></span></span></a>
                                                        </li>
                                                        <?php endforeach ?>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                            <li id="sticky-nav-menu-item-240"
                                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow">
                                                <a href="#" class=""><span class="item_outer"><span
                                                            class="item_text">Matchs</span><span class="plus"></span><i
                                                            class="edgtf-menu-arrow fa fa-angle-down"></i></span></a>
                                                <div class="second">
                                                    <div class="inner">
                                                        <ul>
                                                        <?php foreach($games as $game):?>    
                                                        <li id="sticky-nav-menu-item-242"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page ">
                                                            <a href="matchs.php?id=<?php echo $game['abr']; ?>"
                                                               ><span class="item_outer"><span
                                                                        class="item_text"><?php echo $game['nom']; ?> </span><span
                                                                            class="plus"></span></span></a>
                                                        </li>
                                                        <?php endforeach ?>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </li>
                                        
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="edgtf-position-center">
                                <div class="edgtf-position-center-inner"
                                    style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://besthqwallpapers.com/Uploads/20-12-2018/75086/thumb2-gray-metal-pattern-4k-metal-texture-dark-metal-gray-metal-background.jpg);">
                                    <div class="edgtf-logo-wrapper">
                                        <a itemprop="url" href="https://shockfx-esport.com/"
                                            style="height: 52px;">
                                            <img itemprop="image" class="edgtf-normal-logo"
                                                src="images site/logo-sfx1.png"
                                                width="100" height="99" alt="logo" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="edgtf-position-right">
                                <div class="edgtf-position-right-inner">
                                    <nav
                                        class="edgtf-main-menu edgtf-drop-down edgtf-divided-right-part edgtf-sticky-nav">
                                        <ul id="menu-divided-right-navigation-1" class="clearfix">
                                            <li id="sticky-nav-menu-item-243"
                                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow">
                                                <a href="https://eliminate.fr/categorie-produit/shock-fx/" class=""><span class="item_outer"><span
                                                            class="item_text">Shop</span><span class="plus"></span><i
                                                            class="edgtf-menu-arrow fa fa-angle-down"></i></span></a>

                                            </li>

                                            <li id="sticky-nav-menu-item-244"
                                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow">
                                                <a href="#" class=""><span class="item_outer"><span
                                                            class="item_text">Le Club</span><span
                                                            class="plus"></span><i
                                                            class="edgtf-menu-arrow fa fa-angle-down"></i></span></a>

                                            <div class="second">
                                                <div class="inner">
                                                    <ul>
                                                    <li id="nav-menu-item-1780"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page ">
                                                            <a href="roster.php?id=staff"
                                                                class=""><span class="item_outer"><span
                                                                        class="item_text">Staff</span></span></a>
                                                        </li>
                                                        <li id="nav-menu-item-1780"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page ">
                                                            <a href="sponsors.php"
                                                                class=""><span class="item_outer"><span
                                                                        class="item_text">Sponsors</span></span></a>
                                                        </li>
                                                        <li id="nav-menu-item-1781"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page ">
                                                            <a href="recrutement.php"
                                                                class=""><span class="item_outer"><span
                                                                        class="item_text">Recrutement</span></span></a>
                                                        </li>

                                                        <li id="nav-menu-item-1596"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page ">
                                                            <a href="hall-of-fame.php" class=""><span
                                                                    class="item_outer"><span
                                                                        class="item_text">Palmarès</span></span></a>

                                                        </li>
                                                        <!--<li id="nav-menu-item-1596"
                                                             class="menu-item menu-item-type-post_type menu-item-object-page ">
                                                            <a href="us_louviers.php" class=""><span
                                                                    class="item_outer"><span
                                                                        class="item_text">ShockFX & US Louviers</span></span></a>

                                                        </li>-->

                                                </div>
                                            </div>
                                            </li>
                                         
                                            <li id="sticky-nav-menu-item-246"
                                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow">
                                                <a href="contact-us.php" class=" current "><span class="item_outer"><span
                                                            class="item_text">Contact</span><span class="plus"></span><i
                                                            class="edgtf-menu-arrow fa fa-angle-down"></i></span></a>

                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header class="edgtf-mobile-header">
                <div class="edgtf-mobile-header-inner">
                    <div class="edgtf-mobile-header-holder">
                        <div class="edgtf-grid">
                            <div class="edgtf-vertical-align-containers">
                                <div class="edgtf-vertical-align-containers">
                                    <div class="edgtf-mobile-menu-opener edgtf-mobile-menu-opener-svg-path">
                                        <a href="javascript:void(0)">
                                            <span class="edgtf-mobile-menu-icon">
                                                <svg version="1.1" class="edgtf-mobile-opener-svg"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    width="23.922px" height="23.916px" viewBox="0 0 23.922 23.916"
                                                    enable-background="new 0 0 23.922 23.916" xml:space="preserve">
                                                    <rect x="2.604" y="14.698"
                                                        transform="matrix(0.7071 0.7071 -0.7071 0.7071 14.9741 2.3277)"
                                                        fill="#ffffff" width="4.146" height="9.083" />
                                                    <rect x="17.166" y="0.135"
                                                        transform="matrix(0.7072 0.707 -0.707 0.7072 8.9391 -12.2324)"
                                                        fill="#ffffff" width="4.145" height="9.083" />
                                                    <rect x="2.61" y="0.141"
                                                        transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 11.3045 4.6818)"
                                                        fill="#ffffff" width="4.145" height="9.083" />
                                                    <rect x="17.172" y="14.703"
                                                        transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 46.4606 19.2446)"
                                                        fill="#ffffff" width="4.146" height="9.083" />
                                                </svg> </span>
                                        </a>
                                    </div>
                                    <div class="edgtf-position-center">
                                        <div class="edgtf-position-center-inner">
                                            <div class="edgtf-mobile-logo-wrapper">
                                                <a itemprop="url" href="https://shockfx-esport.com/"
                                                    style="height: 42px">
                                                    <img itemprop="image"
                                                        src="images site/logo-sfx1.png"
                                                        width="85" height="84" alt="Mobile Logo" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="edgtf-position-right">
                                        <div class="edgtf-position-right-inner">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav class="edgtf-mobile-nav" role="navigation" aria-label="Mobile Menu">
                        <div class="edgtf-grid">
                            <ul id="menu-main-menu-navigation" class="">
                                <li id="mobile-menu-item-35"
                                    class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent  edgtf-active-item ">
                                    <a href="index.php" class=" current  edgtf-mobile-no-link"><span>Accueil</span></a>
                                   
                                </li>
                                <li id="mobile-menu-item-36"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub">
                                    <a href="teams.php" class=" edgtf-mobile-no-link"><span>Equipes</span></a><span
                                        class="mobile_arrow"><i class="edgtf-sub-arrow bx bxs-chevron-right"></i><i
                                            class="fa fa-angle-down"></i></span>
                                    <ul class="sub_menu">

                                    <?php foreach($games as $game):?>    
                                                        <li id="mobile-menu-item-2797"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page ">
                                                            <a href="roster.php?id=<?php echo $game['abr']; ?>"
                                                               ><span><?php echo $game['nom']; ?></span>
                                                                        </a>
                                                        </li>
                                                        <?php endforeach ?>
                                       
                                       
                                    </ul>
                                </li>
                                <li id="mobile-menu-item-37"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub">
                                    <a href="#" class=" edgtf-mobile-no-link"><span>Matchs</span></a><span
                                        class="mobile_arrow"><i class="edgtf-sub-arrow bx bxs-chevron-right"></i><i
                                            class="fa fa-angle-down"></i></span>
                                    <ul class="sub_menu">
                                    <?php foreach($games as $game):?>    
                                                        <li id="mobile-menu-item-2797"
                                                            class="menu-item menu-item-type-post_type menu-item-object-page ">
                                                            <a href="matchs.php?id=<?php echo $game['abr']; ?>"
                                                               ><span><?php echo $game['nom']; ?></span>
                                                                        </a>
                                                        </li>
                                                        <?php endforeach ?>
                                        
                                    </ul>
                                </li>
                                <li id="mobile-menu-item-38"
                                    class="menu-item menu-item-type-custom menu-item-object-custom ">
                                    <a href="https://eliminate.fr/categorie-produit/shock-fx/" class=" edgtf-mobile-no-link"><span>Shop</span></a>
                                    
                                </li>
                                <li id="mobile-menu-item-39"
                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub">
                                    <a href="#" class=" edgtf-mobile-no-link"><span>Le Club</span></a><span
                                        class="mobile_arrow"><i class="edgtf-sub-arrow bx bxs-chevron-right"></i><i
                                            class="fa fa-angle-down"></i></span>
                                    <ul class="sub_menu">
                                    <li id="mobile-menu-item-236"
                                            class="menu-item menu-item-type-post_type menu-item-object-page "><a
                                                href="roster.php?id=staff"
                                                class=""><span>Staff</span></a></li>
                                        <li id="mobile-menu-item-236"
                                            class="menu-item menu-item-type-post_type menu-item-object-page "><a
                                                href="sponsors.php"
                                                class=""><span>Sponsors</span></a></li>
                                        <li id="mobile-menu-item-237"
                                            class="menu-item menu-item-type-post_type menu-item-object-product "><a
                                                href="recrutement.php"
                                                class=""><span>Recrutement</span></a></li>
                                        <li id="mobile-menu-item-1519"
                                            class="menu-item menu-item-type-post_type menu-item-object-product">
                                            <a href="hall-of-fame.php" class=" edgtf-mobile-no-link"><span>Palmarès</span></a>
                                           
                                        </li>
                                       <!-- <li id="mobile-menu-item-1519"
                                            class="menu-item menu-item-type-post_type menu-item-object-product">
                                            <a href="us_louviers.php" class=" edgtf-mobile-no-link"><span>ShockFX & US Louviers</span></a>
                                           
                                        </li>-->
                                        
                                        
                                    </ul>
                                </li>
                                <li id="mobile-menu-item-40"
                                    class="menu-item menu-item-type-custom menu-item-object-custom ">
                                    <a href="contact-us.php" class=" edgtf-mobile-no-link"><span>Contact</span></a>
                                   
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            <a id='edgtf-back-to-top' href='#'>
                <span class="edgtf-icon-stack">
                    <i class="edgtf-icon-font-awesome bx bxs-chevron-up edgtf-icon-element"></i> </span>
            </a>
            <div class="edgtf-content" style="margin-top: -120px">
                <div class="edgtf-content-inner">
                    <div class="edgtf-full-width">
                        <div class="edgtf-full-width-inner">
                            <div class="edgtf-grid-row">
                                <div class="edgtf-page-content-holder edgtf-grid-col-12">
                                    <div class="vc_row wpb_row vc_row-fluid">
                                        <div class="wpb_column vc_column_container vc_col-sm-12">
                                            <div class="vc_column-inner">
                                                <div class="wpb_wrapper">
                                                    <div class="wpb_revslider_element wpb_content_element">
                                                        <link href="https://fonts.googleapis.com/css?family=Rubik:700"
                                                            rel="stylesheet" property="stylesheet" type="text/css"
                                                            media="all">
                                                        <div id="rev_slider_2_1_wrapper"
                                                            class="rev_slider_wrapper fullscreen-container"
                                                            data-source="gallery"
                                                            style="background-image:url(https://playerx.qodeinteractive.com/wp-content/uploads/2018/06/h1-background-img-1.jpg);background-size: cover;padding:0px;">

                                                            <div id="rev_slider_2_1" class="rev_slider fullscreenbanner"
                                                                style="display: none;">
                                                               
                                                            </div>
                                                           
                                                            <script type="text/javascript">
                                                                if (setREVStartSize !== undefined) setREVStartSize(
                                                                    { c: '#rev_slider_2_1', responsiveLevels: [1920, 1441, 1025, 480], gridwidth: [1200, 1100, 600, 300], gridheight: [750, 600, 600, 500], sliderLayout: 'fullscreen', fullScreenAutoWidth: 'off', fullScreenAlignForce: 'off', fullScreenOffsetContainer: '', fullScreenOffset: '' });

                                                                var revapi2,
                                                                    tpj;
                                                                (function () {
                                                                    if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded", onLoad); else onLoad();
                                                                    function onLoad() {
                                                                        if (tpj === undefined) { tpj = jQuery; if ("off" == "on") tpj.noConflict(); }
                                                                        if (tpj("#rev_slider_2_1").revolution == undefined) {
                                                                            revslider_showDoubleJqueryError("#rev_slider_2_1");
                                                                        } else {
                                                                            revapi2 = tpj("#rev_slider_2_1").show().revolution({
                                                                                sliderType: "standard",
                                                                                jsFileLocation: "/assets/js/revolution/",
                                                                                sliderLayout: "fullscreen",
                                                                                dottedOverlay: "none",
                                                                                delay: 4000,
                                                                                navigation: {
                                                                                    keyboardNavigation: "off",
                                                                                    keyboard_direction: "horizontal",
                                                                                    mouseScrollNavigation: "off",
                                                                                    mouseScrollReverse: "default",
                                                                                    onHoverStop: "off",
                                                                                    bullets: {
                                                                                        enable: true,
                                                                                        hide_onmobile: false,
                                                                                        style: "playerx",
                                                                                        hide_onleave: false,
                                                                                        direction: "horizontal",
                                                                                        h_align: "center",
                                                                                        v_align: "bottom",
                                                                                        h_offset: 0,
                                                                                        v_offset: 170,
                                                                                        space: 14,
                                                                                        tmp: ''
                                                                                    }
                                                                                },
                                                                                viewPort: {
                                                                                    enable: true,
                                                                                    outof: "wait",
                                                                                    visible_area: "99%",
                                                                                    presize: false
                                                                                },
                                                                                responsiveLevels: [1920, 1441, 1025, 480],
                                                                                visibilityLevels: [1920, 1441, 1025, 480],
                                                                                gridwidth: [1200, 1100, 600, 300],
                                                                                gridheight: [750, 600, 600, 500],
                                                                                lazyType: "none",
                                                                                shadow: 0,
                                                                                spinner: "spinner3",
                                                                                stopLoop: "off",
                                                                                stopAfterLoops: -1,
                                                                                stopAtSlide: -1,
                                                                                shuffle: "off",
                                                                                autoHeight: "off",
                                                                                fullScreenAutoWidth: "off",
                                                                                fullScreenAlignForce: "off",
                                                                                fullScreenOffsetContainer: "",
                                                                                fullScreenOffset: "",
                                                                                disableProgressBar: "on",
                                                                                hideThumbsOnMobile: "off",
                                                                                hideSliderAtLimit: 0,
                                                                                hideCaptionAtLimit: 0,
                                                                                hideAllCaptionAtLilmit: 0,
                                                                                debugMode: false,
                                                                                fallbacks: {
                                                                                    simplifyAll: "off",
                                                                                    nextSlideOnWindowFocus: "off",
                                                                                    disableFocusListener: false,
                                                                                }
                                                                            });
                                                                        }; /* END OF revapi call */

                                                                    }; /* END OF ON LOAD FUNCTION */
                                                                }()); /* END OF WRAPPING FUNCTION */
                                                            </script>
                                                            
                                                              <div class="edgtf-row-grid-section-wrapper edgtf-content-aligment-center">
                                        <div class="edgtf-row-grid-section">
                                            <div
                                                class="vc_row wpb_row vc_row-fluid vc_custom_1530543022555 vc_row-o-content-middle">
                                                <div
                                                    class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-1 vc_col-lg-10 vc_col-md-offset-0 vc_col-md-12 vc_col-sm-offset-0 vc_col-xs-12">
                                                    <div class="vc_column-inner" style="padding-left:20px;">
                                                        <div class="wpb_wrapper">
                                                            <div class="edgtf-section-title-holder  edgtf-st-standard ">
                                                                <div class="edgtf-st-inner">
                                                                    <h3 class="edgtf-st-title">
                                                                        Bienvenue sur le <span
                                                                            class="edgtf-st-title-hightlight">nouveau</span>
                                                                         site de </br>ShockFX Esport</h3>
                                                                    <div class="edgtf-st-separator">
                                                                        <svg version="1.1"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                            x="0px" y="0px" width="124.985px"
                                                                            height="3.411px" viewBox="0 0 124.985 3.411"
                                                                            enable-background="new 0 0 124.985 3.411"
                                                                            xml:space="preserve">
                                                                            <polygon fill="#FFFFFF"
                                                                                points="0,0 124.985,0 124.985,1.121 96.484,1.121 86.944,3.411 38.67,3.411 29.162,1.121 0,1.121 " />
                                                                        </svg>
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="vc_row wpb_row vc_row-fluid edgtf-row-with-shadow edgtf-content-aligment-center">
                                        <div class="wpb_column vc_column_container vc_col-sm-12">
                                            <div class="vc_column-inner vc_custom_1529910901070">
                                                <div class="wpb_wrapper">
                                                    <div class="edgtf-row-grid-section-wrapper "
                                                        style="background-image: url(https://playerx.qodeinteractive.com/wp-content/uploads/2018/06/p3-background-img-1.jpg); margin-top: 28px;">
                                                        <div class="edgtf-row-grid-section">
                                                            <div class="vc_row wpb_row vc_inner vc_row-fluid">
                                                                <div
                                                                    class="wpb_column vc_column_container vc_col-sm-12">
                                                                    <div class="vc_column-inner">
                                                                        <div class="wpb_wrapper">
                                                                            <div
                                                                                class="edgtf-elements-holder   edgtf-one-column  edgtf-responsive-mode-768 ">
                                                                                <div class="edgtf-eh-item  edgtf-vertical-alignment-top edgtf-horizontal-alignment-center "
                                                                                    data-item-class="edgtf-eh-custom-1319">
                                                                                    <div class="edgtf-eh-item-inner">
                                                                                        <div class="edgtf-eh-item-content edgtf-eh-custom-1319"
                                                                                            style="padding: 15px 0 20px">
                                                                                            <div
                                                                                                class="edgtf-clients-carousel-holder edgtf-cc-hover-roll-over">
                                                                                                <div class="edgtf-cc-inner edgtf-owl-slider"
                                                                                                    data-number-of-items="3"
                                                                                                    data-enable-loop="yes"
                                                                                                    data-enable-autoplay="yes"
                                                                                                    data-slider-speed="5000"
                                                                                                    data-slider-speed-animation="600"
                                                                                                    data-enable-navigation="no"
                                                                                                    data-enable-pagination="no">
                                                                                                    <div
                                                                                                        class="edgtf-cc-item edgtf-item-space edgtf-cci-has-link">
                                                                                                        <a itemprop="url"
                                                                                                            class="edgtf-cc-link edgtf-block-drag-link"
                                                                                                            href="https://eliminate.fr/"
                                                                                                            target="_self">
                                                                                                            <img itemprop="image"
                                                                                                                class="edgtf-cc-image"
                                                                                                                src="images site/lmn8-slider.png"
                                                                                                                alt="a" />
                                                                                                            <img itemprop="image"
                                                                                                                class="edgtf-cc-hover-image"
                                                                                                                src="images site/lmn8-slider.png"
                                                                                                                alt="a" />
                                                                                                        </a>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        class="edgtf-cc-item edgtf-item-space edgtf-cci-has-link">
                                                                                                        <a itemprop="url"
                                                                                                            class="edgtf-cc-link edgtf-block-drag-link"
                                                                                                            href="https://www.cic.fr"
                                                                                                            target="_self">
                                                                                                            <img itemprop="image"
                                                                                                                class="edgtf-cc-image"
                                                                                                                src="images site/cic-slider.png"
                                                                                                                alt="a" />
                                                                                                            <img itemprop="image"
                                                                                                                class="edgtf-cc-hover-image"
                                                                                                                src="images site/cic-slider.png"
                                                                                                                alt="a" />
                                                                                                            
                                                                                                        </a>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        class="edgtf-cc-item edgtf-item-space edgtf-cci-has-link">
                                                                                                        <a itemprop="url"
                                                                                                            class="edgtf-cc-link edgtf-block-drag-link"
                                                                                                            href="https://www.mywebmaker.fr"
                                                                                                            target="_self">
                                                                                                            <img itemprop="image"
                                                                                                                class="edgtf-cc-image"
                                                                                                                src="images site/mywebmaker.png"
                                                                                                                alt="a" />
                                                                                                            <img itemprop="image"
                                                                                                                class="edgtf-cc-hover-image"
                                                                                                                src="images site/mywebmaker.png"
                                                                                                                alt="a" />    
                                                                                                            
                                                                                                        </a>
                                                                                                    </div>
                                                                                       
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="edgtf-row-grid-section-wrapper edgtf-content-aligment-center">
                                        <div class="edgtf-row-grid-section">
                                            <div
                                                class="vc_row wpb_row vc_row-fluid vc_custom_1530542080210 vc_row-o-content-middle vc_row-flex">
                                                <div
                                                    class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-1 vc_col-lg-10 vc_col-md-offset-0 vc_col-md-12 vc_col-sm-offset-0 vc_col-xs-12">
                                                    <div class="vc_column-inner">
                                                        <div class="wpb_wrapper">
                                                            <div class="edgtf-section-title-holder  edgtf-st-standard ">
                                                                <div class="edgtf-st-inner">
                                                                    <h3 class="edgtf-st-title">
                                                                        UN <span
                                                                            class="edgtf-st-title-hightlight">LIEU</span>
                                                                        POUR EXPRIMER VOS TALENTS</h3>
                                                                    <div class="edgtf-st-separator">
                                                                        <svg version="1.1"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                            x="0px" y="0px" width="124.985px"
                                                                            height="3.411px" viewBox="0 0 124.985 3.411"
                                                                            enable-background="new 0 0 124.985 3.411"
                                                                            xml:space="preserve">
                                                                            <polygon fill="#FFFFFF"
                                                                                points="0,0 124.985,0 124.985,1.121 96.484,1.121 86.944,3.411 38.67,3.411 29.162,1.121 0,1.121 " />
                                                                        </svg>
                                                                    </div>
                                                                    <p class="edgtf-st-text">
                                                                    L’esport est un secteur en constante évolution, mais aussi en expansion incontestable, avec un chiffre d’affaire qui dépasse désormais le <strong>milliard</strong> d’euros chaque année dans le monde. Au même titre que les cryptomonnaies ou encore le metaverse, investir dans l’esport est aujourd’hui plus que jamais un choix judicieux. 
                                                                    <br/>A <strong>ShockFX Esport</strong> nous souhaitons offrir à nos joueurs un environnement qui leur permettra de s’épanouir afin de booster leurs performances. Vous êtes une entreprise à la recherche de plus de visibilité, notamment auprès de notre jeunesse, et vous souhaitez commencer à investir dans l’esport ? <a class="edgtf-social-icon-widget-holder edgtf-icon-has-hover"
                                                
                                                href="contact-us.php" target="_blank">
                                                <span class="edgtf-social-icon-widget">Contactez-nous !</span>
                                            </a></p>

                                                                        <div class="vc_empty_space"
                                                                                style="height: 63px"><span
                                                                                    class="vc_empty_space_inner"></span>
                                                                            </div>

                                                                            <p class="edgtf-st-text">
                                                                            Comme vous le savez, la pandémie de Covid-19 n’a pas facilité les choses, annulations de LANs, etc. Nous avons décidé d'en profiter pour faire avancer nos projets, afin de vous proposer à l’avenir la meilleure <strong>expérience</strong> possible, grâce aux aides qui nous seront fournies, sponsors, la région Normandie... <br/>Vous avez des <strong>compétences</strong> mais ne savez pas comment les valoriser, ou vous souhaitez en construire de nouvelles ? Vous souhaitez apporter votre pierre à l’édifice à un projet solide et passionnant ? N’hésitez pas à nous contacter, nous <strong>recrutons</strong> différents profils et talents ! Vous souhaitez lancer un projet d’équipe ou y contribuer, mais ne souhaitez pas le faire seul, <a class="edgtf-social-icon-widget-holder edgtf-icon-has-hover"
                                                
                                                href="contact-us.php" target="_blank">
                                                <span class="edgtf-social-icon-widget">parlons-en !</span>
                                            </a> Nous serons là pour vous <strong>accompagner</strong>. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                

                                    <div class="edgtf-row-grid-section-wrapper edgtf-content-aligment-center">
                                        <div class="edgtf-row-grid-section">
                                            <div class="vc_row wpb_row vc_row-fluid vc_custom_1530543135289">
                                                <div class="wpb_column vc_column_container vc_col-sm-12">
                                                    <div class="vc_column-inner">
                                                        <div class="wpb_wrapper">
                                                            <div class="edgtf-section-title-holder edgtf-st-standard" style="text-align: center;">
                                                                <div class="edgtf-st-inner">
                                                                    <h3 class="edgtf-st-title">
                                                                        NOS PRODUITS
                                                                    </h3>
                                                                    <div class="edgtf-st-separator">
                                                                        <svg
                                                                            version="1.1"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                            x="0px"
                                                                            y="0px"
                                                                            width="124.985px"
                                                                            height="3.411px"
                                                                            viewBox="0 0 124.985 3.411"
                                                                            enable-background="new 0 0 124.985 3.411"
                                                                            xml:space="preserve"
                                                                        >
                                                                            <polygon fill="#FFFFFF" points="0,0 124.985,0 124.985,1.121 96.484,1.121 86.944,3.411 38.67,3.411 29.162,1.121 0,1.121 " />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="vc_empty_space" style="height: 98px;"><span class="vc_empty_space_inner"></span></div>
                                                            <div class="edgtf-pl-holder edgtf-grid-list edgtf-disable-bottom-space edgtf-standard-layout edgtf-three-columns edgtf-normal-space edgtf-info-below-image">
                                                                <div class="edgtf-pl-outer edgtf-outer-space">
                                                                <div class="edgtf-pli edgtf-item-space">
                                                                        <div class="edgtf-pli-inner">
                                                                            <div class="edgtf-pli-image">
                                                                            <!--<span class="edgtf-pli-onsale">-25%</span>-->
                                                                                <img
                                                                                    width="500"
                                                                                    height="667"
                                                                                    src="images site/Maillot-shockfx-2022-01-300x400.png"
                                                                                    class="attachment-woocommerce_single size-woocommerce_single wp-post-image"
                                                                                    alt="a"
                                                                                    loading="lazy"
                                                                                    
                                                                                />
                                                                            </div>
                                                                            <div class="edgtf-pli-text">
                                                                                <div class="edgtf-pli-text-outer">
                                                                                    <div class="edgtf-pli-text-inner">
                                                                                        <div class="edgtf-pli-add-to-cart edgtf-default-skin">
                                                                                            <a rel="nofollow" href="https://eliminate.fr/produit/shock-fx-jersey-2022/" data-quantity="1" data-product_id="197" data-product_sku="004" class="button add_to_cart_button ajax_add_to_cart edgtf-button">Voir le produit</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <a class="edgtf-pli-link" itemprop="url" href="https://eliminate.fr/produit/shock-fx-jersey-2022/" title="Dangerzone"></a>
                                                                        </div>
                                                                        <div class="edgtf-pli-text-wrapper">
                                                                            <h5 itemprop="name" class="entry-title edgtf-pli-title">
                                                                                <a itemprop="url" href="https://eliminate.fr/produit/shock-fx-jersey-2022/">Jersey 2022</a>
                                                                            </h5>
                                                                            <div class="edgtf-pli-price">
                                                                                <!--<del aria-hidden="true">
                                                                                    <span class="woocommerce-Price-amount amount">39,90€</span>
                                                                                </del>-->
                                                                                <ins>
                                                                                    <span class="woocommerce-Price-amount amount">39,90€</span>
                                                                                </ins>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="edgtf-pli edgtf-item-space">
                                                                        <div class="edgtf-pli-inner">
                                                                            <div class="edgtf-pli-image">
                                                                            <!--<span class="edgtf-pli-onsale">-25%</span>-->
                                                                                <img
                                                                                    width="500"
                                                                                    height="667"
                                                                                    src="images site/Maillot-shockfx-2021-01-300x400.png"
                                                                                    class="attachment-woocommerce_single size-woocommerce_single wp-post-image"
                                                                                    alt="a"
                                                                                    loading="lazy"
                                                                                    
                                                                                />
                                                                            </div>
                                                                            <div class="edgtf-pli-text">
                                                                                <div class="edgtf-pli-text-outer">
                                                                                    <div class="edgtf-pli-text-inner">
                                                                                        <div class="edgtf-pli-add-to-cart edgtf-default-skin">
                                                                                            <a rel="nofollow" href="https://eliminate.fr/produit/shock-fx-jersey/" data-quantity="1" data-product_id="197" data-product_sku="004" class="button add_to_cart_button ajax_add_to_cart edgtf-button">Voir le produit</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <a class="edgtf-pli-link" itemprop="url" href="https://eliminate.fr/produit/shock-fx-jersey/" title="Dangerzone"></a>
                                                                        </div>
                                                                        <div class="edgtf-pli-text-wrapper">
                                                                            <h5 itemprop="name" class="entry-title edgtf-pli-title">
                                                                                <a itemprop="url" href="https://eliminate.fr/produit/shock-fx-jersey/">Jersey 2021</a>
                                                                            </h5>
                                                                            <div class="edgtf-pli-price">
                                                                                <!--<del aria-hidden="true">
                                                                                    <span class="woocommerce-Price-amount amount">39,90€</span>
                                                                                </del>-->
                                                                                <ins>
                                                                                    <span class="woocommerce-Price-amount amount">39,90€</span>
                                                                                </ins>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="edgtf-pli edgtf-item-space">
                                                                        <div class="edgtf-pli-inner">
                                                                            <div class="edgtf-pli-image">
                                                                                <!--<span class="edgtf-pli-onsale">-33%</span>-->
                                                                                <img
                                                                                    width="600"
                                                                                    height="800"
                                                                                    src="images site/SFX-mug-600x800.png"
                                                                                    class="attachment-woocommerce_single size-woocommerce_single wp-post-image"
                                                                                    alt="a"
                                                                                    loading="lazy"
                                                                                    
                                                                                />
                                                                            </div>
                                                                            <div class="edgtf-pli-text">
                                                                                <div class="edgtf-pli-text-outer">
                                                                                    <div class="edgtf-pli-text-inner">
                                                                                        <div class="edgtf-pli-add-to-cart edgtf-default-skin">
                                                                                            <a rel="nofollow" href="https://eliminate.fr/produit/shock-fx-mug/" data-quantity="1" data-product_id="218" data-product_sku="005" class="button add_to_cart_button ajax_add_to_cart edgtf-button">Voir le produit</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <a class="edgtf-pli-link" itemprop="url" href="https://eliminate.fr/produit/shock-fx-mug/" title="T-Shirt"></a>
                                                                        </div>
                                                                        <div class="edgtf-pli-text-wrapper">
                                                                            <h5 itemprop="name" class="entry-title edgtf-pli-title">
                                                                                <a itemprop="url" href="https://eliminate.fr/produit/shock-fx-mug/">Mug</a>
                                                                            </h5>
                                                                            <div class="edgtf-pli-price">
                                                                                <!--<del aria-hidden="true">
                                                                                    <span class="woocommerce-Price-amount amount">15,00€</span>
                                                                                </del>-->
                                                                                <ins>
                                                                                    <span class="woocommerce-Price-amount amount">15,00€</span>
                                                                                </ins>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="edgtf-pli edgtf-item-space">
                                                                        <div class="edgtf-pli-inner">
                                                                            <div class="edgtf-pli-image">
                                                                            <!--<span class="edgtf-pli-onsale">-35%</span>-->

                                                                                <img
                                                                                    width="600"
                                                                                    height="800"
                                                                                    src="images site/SFX-masque-300x400.png"
                                                                                    class="attachment-woocommerce_single size-woocommerce_single wp-post-image"
                                                                                    alt="a"
                                                                                    loading="lazy"
                                                                                   
                                                                                />
                                                                            </div>
                                                                            <div class="edgtf-pli-text">
                                                                                <div class="edgtf-pli-text-outer">
                                                                                    <div class="edgtf-pli-text-inner">
                                                                                        <div class="edgtf-pli-add-to-cart edgtf-default-skin">
                                                                                            <a rel="nofollow" href="https://eliminate.fr/produit/shock-fx-masque-afnor/" data-quantity="1" data-product_id="305" data-product_sku="012" class="button add_to_cart_button ajax_add_to_cart edgtf-button">Voir le produit</a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <a class="edgtf-pli-link" itemprop="url" href="https://eliminate.fr/produit/shock-fx-masque-afnor/" title="ROGM4528"></a>
                                                                        </div>
                                                                        <div class="edgtf-pli-text-wrapper">
                                                                            <h5 itemprop="name" class="entry-title edgtf-pli-title">
                                                                                <a itemprop="url" href="https://eliminate.fr/produit/shock-fx-masque-afnor/">Masque</a>
                                                                            </h5>
                                                                            <div class="edgtf-pli-price">
                                                                                <!--<del aria-hidden="true">
                                                                                    <span class="woocommerce-Price-amount amount">10,00€</span>
                                                                                </del>-->
                                                                                <ins>
                                                                                    <span class="woocommerce-Price-amount amount">10,00€</span>
                                                                                </ins>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="edgtf-row-grid-section-wrapper ">
                                        <div class="edgtf-row-grid-section">
                                           
                                                            <div class="vc_empty_space" style="height: 130px"><span
                                                                    class="vc_empty_space_inner"></span></div>
                                                 
                                        </div>
                                    </div>
                                    <div class="vc_row wpb_row vc_row-fluid vc_custom_1529567793848 vc_row-has-fill edgtf-row-with-shadow edgtf-content-aligment-left"
                                        style="background-image: url(https://playerx.qodeinteractive.com/wp-content/uploads/2018/06/h1-background-img-1.jpg)">
                                        
                                        <div
                                            class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-0 vc_col-lg-6 vc_col-md-offset-0 vc_col-md-12 vc_col-sm-offset-0 vc_col-xs-12">
                                            <div class="vc_column-inner">
                                                <div class="wpb_wrapper">
                                                    <div
                                                        class="edgtf-elements-holder   edgtf-one-column  edgtf-responsive-mode-768 edgtf-one-column-alignment-left">
                                                        <div class="edgtf-eh-item    "
                                                            data-item-class="edgtf-eh-custom-2603"
                                                            data-1367-1600="157px 0px 159px 117px" data-1025-1366="159px 0px 159px 117px"
                                                            data-769-1024="117px 330px 159px 117px"
                                                            data-681-768="118px 130px 158px 75px"
                                                            data-680="120px 0px 159px 42px">
                                                            <div class="edgtf-eh-item-inner">
                                                                <div class="edgtf-eh-item-content edgtf-eh-custom-2603"
                                                                    style="padding: 149px 0px 0px 111px">
                                                                    <div class="edgtf-section-title-holder  edgtf-st-standard edgtf-st-disable-title-break"
                                                                        style="padding: 0 0px;text-align: left">
                                                                        <div class="edgtf-st-inner">
                                                                            <h4 class="edgtf-st-title">
                                                                                Vous souhaitez rejoindre la structure ? </h4>
                                                                        </div>
                                                                    </div>
                                                                    <div class="vc_empty_space" style="height: 32px">
                                                                        <span class="vc_empty_space_inner"></span>
                                                                    </div>
                                                                    <a itemprop="url"
                                                                        href="recrutement.php"
                                                                        target="_self" style="margin: -2px 0 0 0"
                                                                        class="edgtf-btn edgtf-btn-medium edgtf-btn-solid edgtf-solid-btn-with-shadow edgtf-btn-glow">
                                                                        <span class="edgtf-btn-text">Voir les postes recherchés</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="edgtf-row-grid-section-wrapper " style="background-image: url()">
                                        <div class="edgtf-row-grid-section">
                                            <div class="vc_row wpb_row vc_row-fluid vc_custom_1530543083826">
                                                <div class="wpb_column vc_column_container vc_col-sm-12">
                                                    <div class="vc_column-inner">
                                                        <div class="wpb_wrapper">
                                                            <div class="edgtf-section-title-holder  edgtf-st-standard "
                                                                style="text-align: center">
                                                                <div class="edgtf-st-inner">
                                                                    <h3 class="edgtf-st-title">
                                                                        Les matchs du moment </h3>
                                                                    <div class="edgtf-st-separator">
                                                                        <svg version="1.1"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                            x="0px" y="0px" width="124.985px"
                                                                            height="3.411px" viewBox="0 0 124.985 3.411"
                                                                            enable-background="new 0 0 124.985 3.411"
                                                                            xml:space="preserve">
                                                                            <polygon fill="#FFFFFF"
                                                                                points="0,0 124.985,0 124.985,1.121 96.484,1.121 86.944,3.411 38.67,3.411 29.162,1.121 0,1.121 " />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="vc_empty_space" style="height: 97px"><span
                                                                    class="vc_empty_space_inner"></span></div>
                                                            <div
                                                                class="edgtf-tabs tabs-without-padding edgtf-tabs-standard ">
                                                                <ul class="edgtf-tabs-nav clearfix">
                                                                   
                                                                    <li>
                                                                        <a href="#tab-upcoming-matches">
                                                                            Matchs a venir</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#tab-latest-results">Derniers resultats</a>
                                                                    </li>
                                                                </ul>
                                                               
                                                                <div class="edgtf-tab-container"
                                                                    id="tab-upcoming-matches-436">
                                                                    <div class="edgtf-match-list-holder-outer">
                                                                        <div class="edgtf-match-list-holder edgtf-match-skin-dark"
                                                                            data-next-page=2 data-order-by=menu_order
                                                                            data-order=ASC data-number=4
                                                                            data-category=upcoming-matches
                                                                            data-status=to_be_played data-title-tag=h5
                                                                            data-team-title-tag=h6
                                                                            data-show-categories=yes data-show-date=yes
                                                                            data-skin=dark data-show-result=yes
                                                                            data-show-load-more=no data-max-num-pages=2>
                                                                            <?php foreach($comings as $coming): ?>

                                                                            <article
                                                                                class="edgtf-match-status-to_be_played">
                                                                                <div class="edgtf-match-item-holder">
                                                                                
                                                                                    <div
                                                                                        class="edgtf-match-single-team">
                                                                                        <div
                                                                                            class="edgtf-match-item-image-holder">
                                                                                            <img src="images site/PNG.png"
                                                                                                alt="" />
                                                                                        </div>
                                                                                        <?php if($coming['roster']!="aucun"): ?>
                                                                                        <div
                                                                                            class="edgtf-match-item-text-holder">
                                                                                            <h6
                                                                                                class="edgtf-match-team-title">
                                                                                                <?php echo $coming['roster']; ?> </h6>
                                                                                        </div>
                                                                                        <?php endif ?>
                                                                                        
                                                                                    </div>
                                                                                    <div class="edgtf-match-vs-image">
                                                                                        <img src="https://playerx.qodeinteractive.com/wp-content/plugins/playerx-core/assets/img/vs_dark.png"
                                                                                            alt="Match vs image" />
                                                                                    </div>
                                                                                    <div
                                                                                        class="edgtf-match-single-team">
                                                                                        <div
                                                                                            class="edgtf-match-item-image-holder">
                                                                                            <img src="images site/<?php echo $coming['logo_adversaire']; ?>"
                                                                                                alt="" />
                                                                                        </div>
                                                                                        <div
                                                                                            class="edgtf-match-item-text-holder">
                                                                                            <h6
                                                                                                class="edgtf-match-team-title">
                                                                                                <?php echo $coming['nom_adversaire']; ?> </h6>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="edgtf-match-info">
                                                                                        <div
                                                                                            class="edgtf-match-category">
                                                                                            <span
                                                                                                class="edgtf-match-category-holder">
                                                                                                <span>tous les matchs</span><span>matchs à venir</span></span>
                                                                                        </div>
                                                                                        <h5 class="edgtf-match-title">
                                                                                        <?php echo $coming['competition']; ?> </h5>
                                                                                        <div class="edgtf-match-date">
                                                                                            <span
                                                                                                class="edgtf-match-date"><?php echo $coming['date']; ?>,
                                                                                                <?php echo $coming['heure']; ?></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <?php if(!empty($coming['lien_stream'])) : ?>
                                                                                    <div
                                                                                        class="edgtf-match-stream-holder">
                                                                                        <a href="<?php echo $coming['lien_stream']; ?>"
                                                                                            target="_blank"><i
                                                                                                class="edgtf-icon-font-awesome bx bxl-twitch edgtf-icon-element"
                                                                                                style=""></i><span>voir le
                                                                                                stream</span></a>
                                                                                    </div>
                                                                                    <?php endif?>
                                                                                </div>
                                                                            </article>

                                                                            <?php endforeach?>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="edgtf-tab-container"
                                                                    id="tab-latest-results-299">
                                                                    <div class="edgtf-match-list-holder-outer">
                                                                        <div class="edgtf-match-list-holder edgtf-match-skin-dark"
                                                                            data-next-page=2 data-order-by=menu_order
                                                                            data-order=ASC data-number=4
                                                                            data-category=latest-results
                                                                            data-status=finished data-title-tag=h5
                                                                            data-team-title-tag=h6
                                                                            data-show-categories=yes data-show-date=yes
                                                                            data-skin=dark data-show-result=yes
                                                                            data-show-load-more=no data-max-num-pages=1>
                                                                            <?php foreach($finishs as $finish): ?>

                                                                            <article
                                                                                class="edgtf-match-status-finished">
                                                                                <div class="edgtf-match-item-holder">
                                                                                
                                                                                    <div
                                                                                        class="edgtf-match-single-team">
                                                                                        <div
                                                                                            class="edgtf-match-item-image-holder">
                                                                                            <img src="images site/PNG.png"
                                                                                                alt="" />
                                                                                        </div>
                                                                                        <?php if($finish['roster']!="aucun"): ?>
                                                                                        <div
                                                                                            class="edgtf-match-item-text-holder">
                                                                                            <h6
                                                                                                class="edgtf-match-team-title">
                                                                                                <?php echo $finish['roster']; ?> </h6>
                                                                                        </div>
                                                                                        <?php endif ?>
                                                                                        
                                                                                    </div>
                                                                                    <div class="edgtf-match-vs-image">
                                                                                        <img src="https://playerx.qodeinteractive.com/wp-content/plugins/playerx-core/assets/img/vs_finished.png"
                                                                                            alt="Match vs image" />
                                                                                    </div>
                                                                                    <div
                                                                                        class="edgtf-match-single-team">
                                                                                        <div
                                                                                            class="edgtf-match-item-image-holder">
                                                                                            <img src="images site/<?php echo $finish['logo_adversaire']; ?>"
                                                                                                alt="" />
                                                                                        </div>
                                                                                        <div
                                                                                            class="edgtf-match-item-text-holder">
                                                                                            <h6
                                                                                                class="edgtf-match-team-title">
                                                                                                <?php echo $finish['nom_adversaire']; ?> </h6>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="edgtf-match-info">
                                                                                        <div
                                                                                            class="edgtf-match-category">
                                                                                            <span
                                                                                                class="edgtf-match-category-holder">
                                                                                                <span>tous les matchs</span><span>derniers résultats</span></span>
                                                                                        </div>
                                                                                        <h5 class="edgtf-match-title">
                                                                                        <?php echo $finish['competition']; ?> </h5>
                                                                                        <div class="edgtf-match-date">
                                                                                            <span
                                                                                                class="edgtf-match-date"><?php echo $finish['date']; ?>,
                                                                                                <?php echo $finish['heure']; ?></span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="edgtf-match-result-holder" style="width:150px;" >
                                                                                    <span class="edgtf-match-info-status"><strong <?php if($finish['win']==1):?>style="color:#ff0e1f;"<?php endif ?>><?php echo $finish['score_nous']; ?></strong> : <strong <?php if($finish['win']==0):?>style="color:#7f7f7f;"<?php endif ?>><?php echo $finish['score_adversaire']; ?></strong></span>
                                                                                    </div>
                                                                                </div>
                                                                            </article>

                                                                            <?php endforeach?>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="edgtf-row-grid-section-wrapper edgtf-parallax-row-holder edgtf-row-with-shadow edgtf-content-aligment-center"
                                        data-parallax-bg-image=https://playerx.qodeinteractive.com/wp-content/uploads/2018/06/h1-parallax-2.jpg
                                        data-parallax-bg-speed=1>
                                        <div class="edgtf-row-grid-section">
                                            <div class="vc_row wpb_row vc_row-fluid vc_custom_1530542080210">
                                                <div
                                                    class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-0 vc_col-lg-3 vc_col-md-offset-0 vc_col-md-6 vc_col-sm-offset-0 vc_col-xs-12">
                                                    <div class="vc_column-inner">
                                                        <div class="wpb_wrapper">
                                                            <div class="edgtf-counter-holder ">
                                                                <div class="edgtf-counter-inner">
                                                                    <span
                                                                        class="edgtf-counter edgtf-zero-counter">15</span>
                                                                    <h6 class="edgtf-counter-title">
                                                                        Equipes </h6>
                                                                </div>
                                                            </div>
                                                            <div class="vc_empty_space" style="height: 65px"><span
                                                                    class="vc_empty_space_inner"></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-0 vc_col-lg-3 vc_col-md-offset-0 vc_col-md-6 vc_col-sm-offset-0 vc_col-xs-12">
                                                    <div class="vc_column-inner">
                                                        <div class="wpb_wrapper">
                                                            <div class="edgtf-counter-holder ">
                                                                <div class="edgtf-counter-inner">
                                                                    <span
                                                                        class="edgtf-counter edgtf-zero-counter"><?php echo $joueurs; ?></span>
                                                                    <h6 class="edgtf-counter-title">
                                                                        Membres </h6>
                                                                </div>
                                                            </div>
                                                            <div class="vc_empty_space" style="height: 65px"><span
                                                                    class="vc_empty_space_inner"></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-0 vc_col-lg-3 vc_col-md-offset-0 vc_col-md-6 vc_col-sm-offset-0 vc_col-xs-12">
                                                    <div class="vc_column-inner">
                                                        <div class="wpb_wrapper">
                                                            <div class="edgtf-counter-holder ">
                                                                <div class="edgtf-counter-inner">
                                                                    <span
                                                                        class="edgtf-counter edgtf-zero-counter"><?php echo $podiums; ?></span>
                                                                    <h6 class="edgtf-counter-title">
                                                                        Podiums </h6>
                                                                </div>
                                                            </div>
                                                            <div class="vc_empty_space" style="height: 65px"><span
                                                                    class="vc_empty_space_inner"></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-offset-0 vc_col-lg-3 vc_col-md-offset-0 vc_col-md-6 vc_col-sm-offset-0 vc_col-xs-12">
                                                    <div class="vc_column-inner">
                                                        <div class="wpb_wrapper">
                                                            <div class="edgtf-counter-holder ">
                                                                <div class="edgtf-counter-inner">
                                                                    <span
                                                                        class="edgtf-counter edgtf-zero-counter">3</span>
                                                                    <h6 class="edgtf-counter-title">
                                                                        Sponsors </h6>
                                                                </div>
                                                            </div>
                                                            <div class="vc_empty_space" style="height: 65px"><span
                                                                    class="vc_empty_space_inner"></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="edgtf-row-grid-section-wrapper " style="background-image: url()">
                                        <div class="edgtf-row-grid-section">
                                            <div class="vc_row wpb_row vc_row-fluid vc_custom_1530543112680">
                                                <div class="wpb_column vc_column_container vc_col-sm-12">
                                                    <div class="vc_column-inner">
                                                        <div class="wpb_wrapper">
                                                            <div
                                                                class="edgtf-elements-holder   edgtf-two-columns  edgtf-responsive-mode-1024 edgtf-one-column-alignment-left">
                                                                <div class="edgtf-eh-item    "
                                                                    data-item-class="edgtf-eh-custom-3181"
                                                                    data-1367-1600="83px 100px 22px 0"
                                                                    data-1025-1366="58px 100px 0px 0"
                                                                    data-769-1024="133px 0 0 0"
                                                                    data-681-768="133px 0 0 0" data-680="133px 0 0 0">
                                                                    <div class="edgtf-eh-item-inner">
                                                                        <div class="edgtf-eh-item-content edgtf-eh-custom-3181"
                                                                            style="padding: 92px 100px 31px 0px">
                                                                            <div class="edgtf-section-title-holder  edgtf-st-standard "
                                                                                style="padding: 0 0px;text-align: left">
                                                                                <div class="edgtf-st-inner">
                                                                                    <h4 class="edgtf-st-title">
                                                                                        Contactez-nous </h4>
                                                                                    <div class="edgtf-st-separator"
                                                                                        style="margin-top: 5px">
                                                                                        <svg version="1.1"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                                                            x="0px" y="0px"
                                                                                            width="124.985px"
                                                                                            height="3.411px"
                                                                                            viewBox="0 0 124.985 3.411"
                                                                                            enable-background="new 0 0 124.985 3.411"
                                                                                            xml:space="preserve">
                                                                                            <polygon fill="#FFFFFF"
                                                                                                points="0,0 124.985,0 124.985,1.121 96.484,1.121 86.944,3.411 38.67,3.411 29.162,1.121 0,1.121 " />
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="vc_empty_space"
                                                                                style="height: 26px"><span
                                                                                    class="vc_empty_space_inner"></span>
                                                                            </div>

                                                                            <div class="edgtf-icon-list-holder ">
                                                                                <div class="edgtf-il-icon-holder">
                                                                                    <i class="bx bx-envelope"></i>
                                                                                </div>
                                                                                <a itemprop="url"
                                                                                    href="mailto:contact@shockfx-esport.com">
                                                                                    <span class="edgtf-il-text"
                                                                                        style="padding-left: 27px"><span
                                                                                            class="__cf_email__"
                                                                                            data-cfemail="117e777778727451707676637e3f727e7c">contact@shockfx-esport.com</span></span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="edgtf-eh-item    "
                                                                data-item-class="edgtf-eh-custom-1746"
                                                                data-1367-1600="141px 0 0 0"
                                                                data-1025-1366="141px 0 0 0" data-769-1024="45px 0 0 0"
                                                                data-681-768="45px 0 0 0" data-680="45px 0 0 0">
                                                                <div class="edgtf-eh-item-inner">
                                                                    <div class="edgtf-eh-item-content edgtf-eh-custom-1746"
                                                                        style="padding: 141px 0 0 0">

                                                                        <form method="post" action="index.php" id="form_envoi">

                                                                        <input class="" type="text" value="" name="nom" placeholder="Votre nom" id="">
                                                                        <input class="" type="text" value="" name="email" placeholder="Adresse email" id="">
                                                                        <textarea class="wpcf7-form-control wpcf7-textarea" name="message" id="" placeholder="Votre message..." cols="40" rows="10"></textarea> 

                                                                        <div class="edgtf-custom-contact-form">
                                                                        <input type="submit" name="mailform" value="Envoyer" class="wpcf7-form-control wpcf7-submit">
                                                                        </div>
                                                                        </form>
                                                                       
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="edgtf-page-footer ">
                <div class="edgtf-footer-bottom-holder">
                    <div class="edgtf-footer-bottom-inner edgtf-grid">
                        <div class="edgtf-footer-bottom-left-inner-border-holder"></div>
                        <div class="edgtf-grid-row ">
                            <div class="edgtf-grid-col-12">
                                <div id="nav_menu-3" class="widget edgtf-footer-bottom-column-1 widget_nav_menu">
                                    <div class="menu-playerx-footer-menu-container">
                                        <ul id="menu-playerx-footer-menu" class="menu">
                                            <li id="menu-item-2242"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item menu-item-2242">
                                                <a href="index.php"
                                                    aria-current="page">Accueil</a>
                                            </li>
                                            <li id="menu-item-3028"
                                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3028">
                                                <a href="teams.php">Equipes</a>
                                            </li>
                                            
                                        
                                            <li id="menu-item-2246"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2246">
                                                <a href="https://eliminate.fr/categorie-produit/shock-fx/">Shop</a>
                                            </li>
                                            <li id="menu-item-2246"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2246">
                                                <a href="sponsors.php">Sponsors</a>
                                            </li>
                                            <li id="menu-item-2246"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2246">
                                                <a href="recrutement.php">Recrutement</a>
                                            </li>
                                            <li id="menu-item-3029"
                                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3029">
                                                <a
                                                    href="hall-of-fame.php">Palmarès</a>
                                            </li>
                                            
                                            <li id="menu-item-3029"
                                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-3029">
                                                <a
                                                    href="contact-us.php">Contact</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="widget edgtf-separator-widget">
                                    <div
                                        class="edgtf-separator-holder clearfix  edgtf-separator-center edgtf-separator-normal">
                                        <div class="edgtf-separator" style="border-style: solid;margin-top: 18px"></div>
                                    </div>
                                </div>

                                <div class="widget edgtf-social-icons-group-widget edgtf-light-skin text-align-center">
                                    <a class="edgtf-social-icon-widget-holder edgtf-icon-has-hover"
                                        style="font-size: 30px;margin: 24px 12px 24px 12px;"
                                        href="https://discord.gg/cn5vmErMVZ" target="_blank">
                                        <span class="edgtf-social-icon-widget bx bxl-discord"></span> </a>
                                    <a class="edgtf-social-icon-widget-holder edgtf-icon-has-hover"
                                        style="font-size: 30px;margin: 24px 12px 24px 12px;"
                                        href="https://twitter.com/ShockfxEsport" target="_blank">
                                        <span class="edgtf-social-icon-widget bx bxl-twitter"></span> </a>
                                    <a class="edgtf-social-icon-widget-holder edgtf-icon-has-hover"
                                        style="font-size: 30px;margin: 24px 12px 24px 12px;"
                                        href="https://www.youtube.com/user/Stephou5430" target="_blank">
                                        <span class="edgtf-social-icon-widget bx bxl-youtube"></span> </a>
                                    <a class="edgtf-social-icon-widget-holder edgtf-icon-has-hover"
                                        style="font-size: 30px;margin: 24px 12px 24px 12px;"
                                        href="https://www.instagram.com/shockfx.esport/" target="_blank">
                                        <span class="edgtf-social-icon-widget bx bxl-instagram"></span> </a>
                                    <a class="edgtf-social-icon-widget-holder edgtf-icon-has-hover"
                                        style="font-size: 30px;margin: 24px 12px 24px 12px;"
                                        href="https://www.twitch.tv/shockfxesport" target="_blank">
                                        <span class="edgtf-social-icon-widget bx bxl-twitch"></span> </a>
                                </div>

                                <div class="widget edgtf-separator-widget">
                                    <div
                                        class="edgtf-separator-holder clearfix  edgtf-separator-center edgtf-separator-normal">
                                        <div class="edgtf-separator" style="border-style: solid;margin-top: 18px"></div>
                                    </div>
                                </div>

                                <div class="edgtf-container">
                                    <div class="row">
                                      <div class="col-md-12">
                                        <div class="copyright">
                                        <script>document.write(new Date().getFullYear());</script> &copy; Copyright <strong>ShockFX Esport</strong>. Tous droits réservés. Site web réalisé par <a href="https://mywebmaker.fr">My Web Maker</a>.
                                        </div>
                                      </div>
                                    </div>
                                    <div class="flag"></div>
                                  </div>

                                  <div class="widget edgtf-separator-widget">
                                    <div
                                        class="edgtf-separator-holder clearfix  edgtf-separator-center edgtf-separator-normal">
                                        <div class="edgtf-separator" style="border-style: solid;margin-top: 18px"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="edgtf-footer-bottom-right-inner-border-holder"></div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    <div class="rbt-toolbar" data-theme="PlayerX" data-featured="" data-button-position="65%"
        data-button-horizontal="right" data-button-alt="no"></div>
    

    <script type='text/javascript' id='contact-form-7-js-extra'>
        /* <![CDATA[ */
        var wpcf7 = { "apiSettings": { "root": "https:\/\/playerx.qodeinteractive.com\/wp-json\/contact-form-7\/v1", "namespace": "contact-form-7\/v1" }, "cached": "1" };
/* ]]> */
    </script>
    <script src="assets/js/1.js"></script>
    <script type='text/javascript' src='https://export.qodethemes.com/_toolbar/assets/js/rbt-modules.js?ver=5.5.3'
        id='rabbit_js-js'></script>
    <script src="assets/js/5.js"></script>
    
    <script src="assets/js/4.js"></script>

    <script src="assets/js/10.js"></script>
    <script type='text/javascript' id='mediaelement-core-js-before'>
        var mejsL10n = { "language": "en", "strings": { "mejs.download-file": "Download File", "mejs.install-flash": "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https:\/\/get.adobe.com\/flashplayer\/", "mejs.fullscreen": "Fullscreen", "mejs.play": "Play", "mejs.pause": "Pause", "mejs.time-slider": "Time Slider", "mejs.time-help-text": "Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds.", "mejs.live-broadcast": "Live Broadcast", "mejs.volume-help-text": "Use Up\/Down Arrow keys to increase or decrease volume.", "mejs.unmute": "Unmute", "mejs.mute": "Mute", "mejs.volume-slider": "Volume Slider", "mejs.video-player": "Video Player", "mejs.audio-player": "Audio Player", "mejs.captions-subtitles": "Captions\/Subtitles", "mejs.captions-chapters": "Chapters", "mejs.none": "None", "mejs.afrikaans": "Afrikaans", "mejs.albanian": "Albanian", "mejs.arabic": "Arabic", "mejs.belarusian": "Belarusian", "mejs.bulgarian": "Bulgarian", "mejs.catalan": "Catalan", "mejs.chinese": "Chinese", "mejs.chinese-simplified": "Chinese (Simplified)", "mejs.chinese-traditional": "Chinese (Traditional)", "mejs.croatian": "Croatian", "mejs.czech": "Czech", "mejs.danish": "Danish", "mejs.dutch": "Dutch", "mejs.english": "English", "mejs.estonian": "Estonian", "mejs.filipino": "Filipino", "mejs.finnish": "Finnish", "mejs.french": "French", "mejs.galician": "Galician", "mejs.german": "German", "mejs.greek": "Greek", "mejs.haitian-creole": "Haitian Creole", "mejs.hebrew": "Hebrew", "mejs.hindi": "Hindi", "mejs.hungarian": "Hungarian", "mejs.icelandic": "Icelandic", "mejs.indonesian": "Indonesian", "mejs.irish": "Irish", "mejs.italian": "Italian", "mejs.japanese": "Japanese", "mejs.korean": "Korean", "mejs.latvian": "Latvian", "mejs.lithuanian": "Lithuanian", "mejs.macedonian": "Macedonian", "mejs.malay": "Malay", "mejs.maltese": "Maltese", "mejs.norwegian": "Norwegian", "mejs.persian": "Persian", "mejs.polish": "Polish", "mejs.portuguese": "Portuguese", "mejs.romanian": "Romanian", "mejs.russian": "Russian", "mejs.serbian": "Serbian", "mejs.slovak": "Slovak", "mejs.slovenian": "Slovenian", "mejs.spanish": "Spanish", "mejs.swahili": "Swahili", "mejs.swedish": "Swedish", "mejs.tagalog": "Tagalog", "mejs.thai": "Thai", "mejs.turkish": "Turkish", "mejs.ukrainian": "Ukrainian", "mejs.vietnamese": "Vietnamese", "mejs.welsh": "Welsh", "mejs.yiddish": "Yiddish" } };
    </script>
    <script src="assets/js/6.js"></script>
    <script type='text/javascript' id='mediaelement-js-extra'>
        /* <![CDATA[ */
        var _wpmejsSettings = { "pluginPath": "\/wp-includes\/js\/mediaelement\/", "classPrefix": "mejs-", "stretching": "responsive" };
/* ]]> */
    </script>
    <script src="assets/js/8.js"></script>

    <script type='text/javascript' id='playerx-edge-modules-js-extra'>
        /* <![CDATA[ */
        var edgtfGlobalVars = { "vars": { "edgtfAddForAdminBar": 0, "edgtfElementAppearAmount": -100, "edgtfAjaxUrl": "https:\/\/playerx.qodeinteractive.com\/wp-admin\/admin-ajax.php", "edgtfStickyHeaderHeight": 0, "edgtfStickyHeaderTransparencyHeight": 70, "edgtfTopBarHeight": 0, "edgtfLogoAreaHeight": 0, "edgtfMenuAreaHeight": 120, "edgtfMobileHeaderHeight": 70 } };
        var edgtfPerPageVars = { "vars": { "edgtfMobileHeaderHeight": 70, "edgtfStickyScrollAmount": 1000, "edgtfHeaderTransparencyHeight": 0, "edgtfHeaderVerticalWidth": 0 } };
/* ]]> */
    </script>
    <script src="assets/js/3.js"></script>
    <script type="text/javascript"
        src="https://static.zdassets.com/ekr/snippet.js?key=af3078fd-a5ae-40da-bee0-e589b98c8603&#038;ver=5.5.3"
        id="ze-snippet"></script>
    <script type="text/javascript">
        zE(function () {
            $zopim(function () {
                var isChatEnabled = sessionStorage.getItem("qodeChatEnabled"),
                    appearingTime = 15000;

                if (isChatEnabled !== "no") {
                    setTimeout(function () {
                        $zopim.livechat.window.show();

                        $zopim.livechat.window.onHide(function () {
                            sessionStorage.setItem("qodeChatEnabled", "no");
                        });
                    }, appearingTime);
                }
            });
        });
    </script>
    <script src="assets/js/7.js"></script>
</body>

</html>