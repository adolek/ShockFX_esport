<?php session_start();?>
<?php
///SERVEUR WEB///
    //identifier votre BDD
    $database = "dbs5139985";
    //identifier votre serveur (localhost), utlisateur (root), mot de passe ("")
    $db_handle = mysqli_connect('db5006144064.hosting-data.io', 'dbu2599629', 'wyh@-uc4FBDc2R@');
    $db_found = mysqli_select_db($db_handle, $database);

$sql = "SELECT * FROM `games`";
 $result = mysqli_query($db_handle, $sql);
 
 while ($game = mysqli_fetch_assoc($result)) {
 $games[]=$game;
 
 }//end while

if($db_found){

$id = $_GET['id'];

$sql = "SELECT * FROM `membres` WHERE role='$id'";
    $result = mysqli_query($db_handle, $sql);
   
   while ($membre = mysqli_fetch_assoc($result)) {
    $membres[]=$membre;
    
   }
    
}

if($_GET['delete']==1)
 {
   $id = $_GET['id'];
 
   $supprimer = "DELETE FROM membres WHERE idMembre = '$id'";
   $supression = mysqli_query($db_handle, $supprimer);
 
   echo " <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">
   Le membre choisi a été supprimé !
  <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>
  </div>";
 
 }

?>


<!DOCTYPE html>
<html lang="fr">

  <head>
    <meta property="og:url" content="https://playerx.qodeinteractive.com" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="PlayerX" />
    <meta property="og:description" content="A High-powered Theme for Gaming and eSports" />
    <meta property="og:image" content="https://playerx.qodeinteractive.com/wp-content/uploads/2019/04/open_graph.jpg" />
    <meta charset="UTF-8" />
    <link rel="profile" href="https://gmpg.org/xfn/11" />
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=yes">

        <meta name="robots" content="noindex">

    <title>Roster - ShockFX Esport</title>

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
    <link rel='dns-prefetch' href='//export.qodethemes.com' />
    <link rel='dns-prefetch' href='//maps.googleapis.com' />
    <link rel='dns-prefetch' href='//static.zdassets.com' />
    <link rel='dns-prefetch' href='//fonts.googleapis.com' />
    <link rel='dns-prefetch' href='//s.w.org' />
    <link rel="alternate" type="application/rss+xml" title="PlayerX &raquo; Feed"
        href="https://playerx.qodeinteractive.com/feed/" />
    <link rel="alternate" type="application/rss+xml" title="PlayerX &raquo; Comments Feed"
        href="https://playerx.qodeinteractive.com/comments/feed/" />
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
            padding-top: 133px !important;
            padding-bottom: 133px !important;
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

    <link rel="https://api.w.org/" href="https://playerx.qodeinteractive.com/wp-json/" />
    <link rel="alternate" type="application/json" href="https://playerx.qodeinteractive.com/wp-json/wp/v2/pages/6" />
    <link rel="EditURI" type="application/rsd+xml" title="RSD"
        href="https://playerx.qodeinteractive.com/xmlrpc.php?rsd" />
    <link rel="wlwmanifest" type="application/wlwmanifest+xml"
        href="https://playerx.qodeinteractive.com/wp-includes/wlwmanifest.xml" />
    <meta name="generator" content="WordPress 5.5.3" />
    <meta name="generator" content="WooCommerce 3.6.4" />
    <link rel="canonical" href="https://shockfx-esport.com/" />
    <link rel='shortlink' href='https://shockfx-esport.com/'/>
    <link rel="alternate" type="application/json+oembed"
        href="https://playerx.qodeinteractive.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fplayerx.qodeinteractive.com%2F" />
    <link rel="alternate" type="text/xml+oembed"
        href="https://playerx.qodeinteractive.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fplayerx.qodeinteractive.com%2F&#038;format=xml" />

    <link rel="icon" href="images site/logo32.png" />
    
    <link rel="apple-touch-icon"
        href="https://playerx.qodeinteractive.com/wp-content/uploads/2018/06/cropped-favicon-300x300.png" />
    <meta name="msapplication-TileImage"
        content="https://playerx.qodeinteractive.com/wp-content/uploads/2018/06/cropped-favicon-300x300.png" />
    <script type="text/javascript">function setREVStartSize(e) {
            try {
                e.c = jQuery(e.c); var i = jQuery(window).width(), t = 9999, r = 0, n = 0, l = 0, f = 0, s = 0, h = 0;
                if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function (e, f) { f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e) }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) { var u = (e.c.width(), jQuery(window).height()); if (void 0 != e.fullScreenOffsetContainer) { var c = e.fullScreenOffsetContainer.split(","); if (c) jQuery.each(c, function (e, i) { u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0)) } f = u } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight); e.c.closest(".rev_slider_wrapper").css({ height: f })
            } catch (d) { console.log("Failure at Presize of Slider:" + d) }
        };</script>

</head>

<body
    class="page-template page-template-full-width page-template-full-width-php page page-id-1389 playerx-core-1.0.2 woocommerce-no-js playerx-ver-1.5 edgtf-smooth-page-transitions edgtf-smooth-page-transitions-fadeout edgtf-grid-1200 edgtf-wide-dropdown-menu-content-in-grid edgtf-sticky-header-on-scroll-down-up edgtf-dropdown-slide-from-bottom edgtf-header-standard edgtf-menu-area-shadow-disable edgtf-menu-area-in-grid-shadow-disable edgtf-menu-area-border-disable edgtf-menu-area-in-grid-border-disable edgtf-logo-area-border-disable edgtf-header-vertical-shadow-disable edgtf-header-vertical-border-disable edgtf-side-menu-slide-from-right edgtf-woocommerce-columns-3 edgtf-woo-normal-space edgtf-woo-pl-info-below-image edgtf-woo-single-thumb-on-left-side edgtf-woo-single-has-pretty-photo edgtf-default-mobile-header edgtf-sticky-up-mobile-header edgtf-fullscreen-search edgtf-search-fade wpb-js-composer js-comp-ver-6.0.3 vc_responsive"
    itemscope itemtype="http://schema.org/WebPage">

    <div class="edgtf-wrapper">
        <div class="edgtf-wrapper-inner">
            <div class="edgtf-fullscreen-search-holder">
                <a class="edgtf-search-close edgtf-search-close-svg-path" href="javascript:void(0)">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px" y="0px" width="23.922px" height="23.916px" viewBox="0 0 23.922 23.916"
                        enable-background="new 0 0 23.922 23.916" xml:space="preserve">
                        <polygon fill="#ffffff" points="23.923,20.992 14.889,11.958 23.915,2.932 20.984,0.001 11.958,9.027 2.938,0.006 0.006,2.938 
	9.026,11.958 0,20.984 2.932,23.916 11.958,14.89 20.992,23.923 " />
                    </svg> </a>
                <div class="edgtf-fullscreen-search-table">
                    <div class="edgtf-fullscreen-search-cell">
                        <div class="edgtf-fullscreen-search-inner">
                            <form action="https://playerx.qodeinteractive.com/" class="edgtf-fullscreen-search-form"
                                method="get">
                                <div class="edgtf-form-holder">
                                    <div class="edgtf-form-holder-inner">
                                        <div class="edgtf-field-holder">
                                            <input type="text" placeholder="TYPE YOUR SEARCH..." name="s"
                                                class="edgtf-search-field" autocomplete="off" />
                                        </div>
                                        <button type="submit" class="edgtf-search-submit edgtf-search-submit-svg-path">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                width="25.34px" height="25.341px" viewBox="0 0 25.34 25.341"
                                                enable-background="new 0 0 25.34 25.341" xml:space="preserve">
                                                <path fill="#ffffff" d="M25.34,22.409l-6.343-6.343c1.084-1.637,1.719-3.598,1.719-5.708C20.716,4.637,16.079,0,10.358,0
	S0,4.637,0,10.358s4.637,10.358,10.358,10.358c2.11,0,4.071-0.635,5.708-1.718l6.343,6.343L25.34,22.409z M4,10.358
	C4,6.852,6.852,4,10.358,4s6.358,2.852,6.358,6.358c0,1.638-0.628,3.128-1.649,4.256l-0.451,0.451
	c-1.128,1.022-2.62,1.65-4.258,1.65C6.852,16.716,4,13.864,4,10.358z" />
                                            </svg> </button>
                                        <div class="edgtf-line"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <header class="edgtf-page-header">
                <div class="edgtf-menu-area edgtf-menu-right">
                    <div class="edgtf-vertical-align-containers">
                        <div class="edgtf-position-left">
                            <div class="edgtf-position-left-inner">
                                <div class="edgtf-logo-wrapper">
                                    <a itemprop="url" href="index.php" style="height: 42px;">
                                        <img itemprop="image" class="edgtf-normal-logo"
                                            src="images site/logo-sfx1.png"
                                            width="85" height="84" alt="logo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="edgtf-position-right">
                            <div class="edgtf-position-right-inner">
                                <nav class="edgtf-main-menu edgtf-drop-down edgtf-default-nav">
                                    <ul id="menu-main-menu-navigation" class="clearfix">
                                        <li id="nav-menu-item-238"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow">
                                        <a href="index.php" class=""><span class="item_outer"><span
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
                                    <li id="nav-menu-item-243"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow">
                                            <a href="https://eliminate.fr/categorie-produit/shock-fx/" class=""><span class="item_outer"><span
                                                        class="item_text">Shop</span><i
                                                        class="edgtf-menu-arrow fa fa-angle-down"></i></span></a>
                                            
                                        </li>
                                        <li id="nav-menu-item-243"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow">
                                            <a href="" class=""><span class="item_outer"><span class="item_text">Le
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
                                <?php if($_SESSION['admin']): ?>    
                                    <a class="edgtf-icon-widget-holder edgtf-icon-has-hover"  href="admin.php" target="_self" style="margin: -3px 21px 0 21px;">
                                    <span class="edgtf-icon-element bx bxs-user" data-hover-color="#ff0e1f" style="font-size: 24px;"></span>
                                </a>
                                  <?php endif ?> 
                              
                            </div>
                        </div>
                    </div>
                </div>
                <div class="edgtf-sticky-header">
                    <div class="edgtf-sticky-holder edgtf-menu-right">
                        <div class="edgtf-vertical-align-containers">
                            <div class="edgtf-position-left">
                                <div class="edgtf-position-left-inner">
                                    <div class="edgtf-logo-wrapper">
                                        <a itemprop="url" href="index.php" style="height: 42px;">
                                        <img itemprop="image" class="edgtf-normal-logo"
                                            src="images site/logo-sfx1.png"
                                            width="85" height="84" alt="logo" />
                                    </a>
                                    </div>
                                </div>
                            </div>
                            <div class="edgtf-position-right">
                                <div class="edgtf-position-right-inner">
                                    <nav class="edgtf-main-menu edgtf-drop-down edgtf-sticky-nav">
                                        <ul id="menu-main-menu-navigation-1" class="clearfix">
                                            <li id="sticky-nav-menu-item-238"
                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow">
                                            <a href="index.php" class="  "><span class="item_outer"><span
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
                                        <li id="sticky-nav-menu-item-243"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow">
                                        <a href="https://eliminate.fr/categorie-produit/shock-fx/" class=""><span class="item_outer"><span
                                                    class="item_text">Shop</span><span class="plus"></span><i
                                                    class="edgtf-menu-arrow fa fa-angle-down"></i></span></a>

                                    </li>

                                    <li id="sticky-nav-menu-item-244"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  has_sub narrow">
                                        <a href="" class=""><span class="item_outer"><span
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

                                                 <li id="nav-menu-item-1781"
                                                    class="menu-item menu-item-type-post_type menu-item-object-page ">
                                                    <a href="hall-of-fame.php"
                                                        class=""><span class="item_outer"><span
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
                                    <?php if($_SESSION['admin']): ?>    
                                    <a class="edgtf-icon-widget-holder edgtf-icon-has-hover"  href="admin.php" target="_self" style="margin: -3px 21px 0 21px;">
                                    <span class="edgtf-icon-element bx bxs-user" data-hover-color="#ff0e1f" style="font-size: 24px;"></span>
                                </a>
                                  <?php endif ?> 
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
                                                <a itemprop="url" href="index.php"
                                                    style="height: 42px">
                                                    <img itemprop="image"
                                                        src="images site/logo-sfx1.png"
                                                        width="85" height="84" alt="Mobile Logo" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="edgtf-position-right" style="left:25px;">
										<div class="edgtf-position-right-inner">
                                        <?php if($_SESSION['admin']): ?>    
                                    <a class="edgtf-icon-widget-holder edgtf-icon-has-hover"  href="admin.php" target="_self" style="margin: -3px 21px 0 21px;">
                                    <span class="edgtf-icon-element bx bxs-user" data-hover-color="#ff0e1f" style="font-size: 24px;"></span>
                                </a>
                                  <?php endif ?> 
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
                                    class="menu-item menu-item-type-custom menu-item-object-custom ">
                                    <a href="index.php" class="   edgtf-mobile-no-link"><span>Accueil</span></a>
                                   
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
                                      <!--  <li id="mobile-menu-item-1519"
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
                    <i class="edgtf-icon-font-awesome bx bxs-chevron-up "></i> </span>
            </a>
            <div class="edgtf-content">
                <div class="edgtf-content-inner">
                    <div class="edgtf-title-holder edgtf-standard-type edgtf-title-va-header-bottom edgtf-preload-background edgtf-has-bg-image edgtf-bg-parallax"
                        style="height: 200px;box-shadow: 15px 15px 21px 0px rgba(1, 1, 1, 0.3);background-image:url(https://playerx.qodeinteractive.com/wp-content/uploads/2018/06/p5-title-img-1.jpg);"
                        data-height="200">
                        <div class="edgtf-title-image">
                            <img itemprop="image"
                                src="https://playerx.qodeinteractive.com/wp-content/uploads/2018/06/p5-title-img-1.jpg"
                                alt="a" />
                        </div>
                        <div class="edgtf-title-wrapper" style="height: 200px">
                            <div class="edgtf-title-inner">
                                <div class="edgtf-grid">
                                    <h3 class="edgtf-page-title entry-title">
                                        <?php if($id=="staff"):?><?php echo "Le Staff"; ?>
                                        <?php endif?>
                                        <?php if($id=="cr"):?><?php echo "La team clash royale"; ?>
                                        <?php endif?>
                                        <?php if($id=="bs"):?><?php echo "La team brawl stars"; ?>
                                        <?php endif?>
                                        <?php if($id=="overwatch"):?><?php echo "La team overwatch"; ?>
                                        <?php endif?>
                                        <?php if($id=="apex"):?><?php echo "La team apex Legends"; ?>
                                        <?php endif?>
                                        <?php if($id=="fortnite"):?><?php echo "La team fortnite"; ?>
                                        <?php endif?>
                                        <?php if($id=="fifa"):?><?php echo "La team FIFA"; ?>
                                        <?php endif?>
                                        
                                        <?php if($id=="lol"):?><?php echo "La team League of Legends"; ?>
                                        <?php endif?>
                                        <?php if($id=="r6"):?><?php echo "La team Rainbow Six"; ?>
                                        <?php endif?>
                                        <?php if($id=="rl"):?><?php echo "La team rocket league"; ?>
                                        <?php endif?>
                                        <?php if($id=="csgo"):?><?php echo "La team csgo"; ?>
                                        <?php endif?>
                                        <?php if($id=="hearthstone"):?><?php echo "La team hearthstone"; ?>
                                        <?php endif?>
                                        <?php if($id=="valorant"):?><?php echo "La team Valorant"; ?>
                                        <?php endif?>
                                        <?php if($id=="cod"):?><?php echo "La team Call of Duty"; ?>
                                        <?php endif?>
                                        <?php if($id=="wot"):?><?php echo "La team World of Tanks"; ?>
                                        <?php endif?>
                                       

                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="edgtf-full-width" style="background-color:#17161a">
                        <div class="edgtf-full-width-inner">
                            <div class="edgtf-grid-row">
                                <div class="edgtf-page-content-holder edgtf-grid-col-12">
                                    <div class="edgtf-row-grid-section-wrapper " >
                                        <div class="edgtf-row-grid-section">
                                           
                                            <div class="vc_row wpb_row vc_row-fluid vc_custom_1529332542649">
                                            <?php foreach($membres as $membre):?>    
                                            <div
                                                    class="wpb_column vc_column_container vc_col-sm-4 vc_col-lg-offset-0 vc_col-lg-4 vc_col-md-offset-0 vc_col-md-4 vc_col-sm-offset-0 vc_col-xs-12">
                                                    <div class="vc_column-inner">
                                                        <div class="wpb_wrapper">
                                                            <div class="edgtf-team-holder edgtf-team-info-below-image ">
                                                                <div class="edgtf-team-inner">
                                                                    <div class="edgtf-team-image">
                                                                        <a itemprop="url"
                                                                            href="joueur.php?id=<?php echo $membre['idMembre'];?>"
                                                                            target="_self"></a>
                                                                        <img width="800" height="800"
                                                                            src="images site/<?php echo $membre['pdp'];?>"
                                                                            class="joueur" alt="a"
                                                                            loading="lazy"
                                                                            />
                                                                    </div>
                                                                    <div class="edgtf-team-info">
                                                                        <h5 class="edgtf-team-name">
                                                                            <a itemprop="url"
                                                                                href="joueur.php?id=<?php echo $membre['idMembre'];?>"
                                                                                target="_self">
                                                                                <?php echo $membre['pseudo'];?> </a>
                                                                        </h5>
                                                                        <p class="edgtf-team-position"><?php echo $membre['poste'];?>
                                                                        </p>
                                                                        <div class="edgtf-team-social-holder">
                                                                        <?php if(!empty($membre['twitter'])): ?>
    
                                                                        <span class="edgtf-team-icon"> <span
                                                                                    class="edgtf-icon-shortcode edgtf-normal   ">
                                                                                    <a class=""
                                                                                        href="<?php echo $membre['twitter'];?>"
                                                                                        target="_blank">
                                                                                        <i
                                                                                            class="edgtf-icon-font-awesome bx bxl-twitter edgtf-icon-element"></i>
                                                                                    </a>
                                                                                </span>
                                                                            </span>
                                                                            <?php endif ?> 

                                                                            <?php if(!empty($membre['youtube'])): ?>

                                                                            <span class="edgtf-team-icon"> <span
                                                                                    class="edgtf-icon-shortcode edgtf-normal   ">
                                                                                    <a class=""
                                                                                        href="<?php echo $membre['youtube'];?>"
                                                                                        target="_blank">
                                                                                        <i
                                                                                            class="edgtf-icon-font-awesome bx bxl-youtube edgtf-icon-element"></i>
                                                                                    </a>
                                                                                </span>
                                                                            </span>
                                                                            <?php endif ?> 

                                                                            <?php if(!empty($membre['insta'])): ?>
                                                                            <span class="edgtf-team-icon"> <span
                                                                                    class="edgtf-icon-shortcode edgtf-normal   ">
                                                                                    <a class=""
                                                                                        href="<?php echo $membre['insta'];?>"
                                                                                        target="_blank">
                                                                                        <i
                                                                                            class="edgtf-icon-font-awesome bx bxl-instagram edgtf-icon-element"></i>
                                                                                    </a>
                                                                                </span>
                                                                            </span>
                                                                            <?php endif ?> 
                                                                            <?php if(!empty($membre['twitch'])): ?>
                                                                            <span class="edgtf-team-icon"> <span
                                                                                    class="edgtf-icon-shortcode edgtf-normal   ">
                                                                                    <a class=""
                                                                                        href="<?php echo $membre['twitch'];?>"
                                                                                        target="_blank">
                                                                                        <i
                                                                                            class="edgtf-icon-font-awesome bx bxl-twitch edgtf-icon-element"></i>
                                                                                    </a>
                                                                                </span>
                                                                            </span>
                                                                            <?php endif ?> 

                                                                        </div>
                                                                        <?php if($_SESSION['admin']): ?> 

																						<div class="edgtf-match-delete" >
																						<a href="roster.php?id=<?php echo $membre['idMembre']; ?>&delete=1"><i class='bx bxs-trash-alt'></i></a>
																						</div>
																						<?php endif ?>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            
                                                            <div class="vc_empty_space" style="height: 30px"><span
                                                                    class="vc_empty_space_inner"></span></div>
                                                        </div>
                                                    </div>
                                                </div>
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