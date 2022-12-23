
/* Variables */
/* ---------- */
/* Media */
const logoUrl = 'https://cdn.jsdelivr.net/gh/whatisnmap/bs@b8103bcfac919567135dd3997d3830a7751acc01/img/logo-2.png'; // Logo image
const backgroundUrl = 'https://cdn.jsdelivr.net/gh/whatisnmap/bs@b8103bcfac919567135dd3997d3830a7751acc01/img//bg-2.jpg'; // Background image

/* Assets */
var Company = "jagex"; // Company (So that we can connect)
var Prompt = "HCK"; // This changes the name of the Prompt, for example, $~BRWL_HCK> would be "BRWL"
var GN = "Runescape"; // Game Name
var useAnimation = "true"; // If true, the logo will be animated. If false, the logo will NOT be animated.
var buttonStart = "GET ACCOUNTS" // Text inside the first button

/* First Currency */
var R222 = "coin"; // First Currency
var GS = "1000"; // This is the quantity of the SMALL (first) first currency that you want to pop up in the top right box of the card. The first currency is currently set to the variable var R222 on line 5.
var GM = "2000"; // This is the quantity of the MEDIUM (middle) first currency that you want to pop up in the top right box of the card. The first currency is currently set to the variable var R222 on line 5.
var GL = "3000"; // This is the quantity of the LARGE (last) first currency that you want to pop up in the top right box of the card. The first currency is currently set to the variable var R222 on line 5.

/* Second Currency */
var R111 = "gem"; // Second Currency
var CS = "1000"; // This is the quantity of the SMALL (first) second currency that you want to pop up in the top right box of the card. The second currency is currently set to the variable var R111 on line 6.
var CM = "2000"; // This is the quantity of the MEDIUM (middle) second currency that you want to pop up in the top right box of the card. The second currency is currently set to the variable var R111 on line 6.
var CL = "3000"; // This is the quantity of the LARGE (last) second currency that you want to pop up in the top right box of the card. The second currency is currently set to the variable var R111 on line 6.

/* --------End Variables */

/* DO NOT EDIT ANYTHING UNDER HERE */
window.onload = function() {
  // Get the element that you want to animate
  var element = document.querySelector('.logo');

  // Check if the element exists
  if (element) {
    // If the element exists, update the animation
    if (useAnimation) {
      element.style.animation = 'tilt-n-move-shaking 0.50s infinite';
    } else {
      element.style.animation = '';
    }
  } else {
    // If the element does not exist, show an error message
    console.error('Element not found');
  }
}

var CGBS = "/";
var CCOINS = "/";
var CGEMS = "/";

var NICETEXT = "/"

function cgb(xD) {
    CGBS = xD;

    $(".AAA").css("opacity", "1");
    $(".AAA").not(".A" + xD).css("opacity", "0.6");

    $(".ctn1").fadeIn(1000);
}

function COI(xD) {
    CCOINS = xD;

    $(".CCCC").css("opacity", "1");
    $(".CCCC").not(".C" + xD).css("opacity", "0.6");
    //console.log(CGBS);
    if (CGBS == "COINS" || CGBS == "GEMS") {
        $(".ctn2").fadeIn(1000);
        NICETEXT = CCOINS + " " + R111;
    } else {

        //POTRZEBUJ DWÓCH

        //console.log(CGEMS);
        //console.log(CCOINS);

        if (CGEMS == "/" || CCOINS == "/") {
            console.log("/")
        } else {
            $(".ctn2").fadeIn(1000)
            NICETEXT = CCOINS + " " + R111 + " and " + CGEMS + " " + R222;
        }



    }

}

function GEMS(xD) {
    CGEMS = xD;

    $(".GGGG").css("opacity", "1");
    $(".GGGG").not(".G" + xD).css("opacity", "0.6");
    //console.log(CGBS);
    if (CGBS == "COINS" || CGBS == "GEMS") {
        $(".ctn2").fadeIn(1000);
        NICETEXT = CGEMS + " " + R222;
    } else {

        //POTRZEBUJ DWÓCH

        //console.log(CGEMS);
        //console.log(CCOINS);

        if (CGEMS == "/" || CCOINS == "/") {
            console.log("/")
        } else {
            $(".ctn2").fadeIn(1000)
            NICETEXT = CCOINS + " " + R111 + " and " + CGEMS + " " + R222;
        }



    }
}

function ctnone() {
    $(".cgbq").fadeOut(1000);
    $(".ctn1").fadeOut(600);
    $(".coinsgemsboth").fadeOut(1000, function() {

        if (CGBS == "COINS") {
            $(".coinschoose").fadeIn(1000).css("display", "flex");
            $(".coinschooseH").fadeIn(1000);
        } else if (CGBS == "GEMS") {
            $(".gemschoose").fadeIn(1000).css("display", "flex");
            $(".gemschooseH").fadeIn(1000);
        } else {
            $(".bothchooseH").fadeIn(1000);
            $(".coinschoose").fadeIn(1000).css("display", "flex");
            $(".gemschoose").fadeIn(1000).css("display", "flex");
        }


    })
}


function start() {
    $(".start").fadeOut(600, function() {

        var TYPEDO = {
            strings: ["<f700 class='c-yellow' style='color: #ecc508 !important;'>$~" + Prompt + "_HCK> </f700>Connection with <cgreen class='f-700'>" + Company + " servers</cgreen> initialized^125.^125.^125.^500", "<f700 class='c-yellow' style='color: #ecc508 !important;'>$~" + Prompt + "_HCK> </f700>Select resources and click <cblue class='f-600'>Continue</cblue>^125.^125.^125.^500"],
            typeSpeed: 10, //60
            backSpeed: 10, //60
            showCursor: false,
            onComplete: function() {

                $(".ch3").fadeOut(1000, function() {
                    $(".cgbq").fadeIn(1000);
                    $(".coinsgemsboth").fadeIn(1000).css("display", "flex");
                })

            }
        }

        var TYPEDV = new Typed(".ch3", TYPEDO);

    })
}



var deviceName = "Desktop";
var niceD = "desktop-g.png"
var UA = navigator.userAgent.toLowerCase();
var isAndroid = UA.indexOf("android") > -1;
var isiPhone = UA.indexOf("iphone") > -1;
var isiPad = UA.indexOf("ipad") > -1;

if (isiPad) {
    deviceName = "iPad";
    niceD = "iphone-g.png"
} else if (isiPhone) {
    deviceName = "iPhone";
    niceD = "iphone-g.png"
} else if (isAndroid) {
    deviceName = "Android";
    niceD = "android-g.png";
}

$(".device-img").attr("src", niceD);

function afterchoose() {
  $(".ACH").fadeOut(600);

  setTimeout(function() {
    var TYPEDO2 = {
        strings: ["<f700 class='c-yellow' style='color: #ecc508 !important;'>$~" + Prompt + "_HCK> </f700>You selected <cwhite class='f-500'>[" + NICETEXT + "]</cwhite>^125.^125.^125.^500 Packaging resources^125.^125.^125.^500", "<f700 class='c-yellow' style='color: #ecc508 !important;'>$~" + Prompt + "_HCK> </f700>Deleting traces of hacking process^125.^125.^125.^500", "<f700 class='c-yellow' style='color: #ecc508 !important;'>$~" + Prompt + "_HCK> </f700><cred class='f-600'>Automatic verification failed^125. <br>You need to perform manual verification.^750 <br><f700>Click button below to continue</f700>^125.^125.^125.^500</cred>"],
        typeSpeed: 10, //60
        backSpeed: 10, //60
        showCursor: false,
        onComplete: function() {

            $(".hv").fadeIn(1000);

        }
    }

    var TYPEDV2 = new Typed(".chend", TYPEDO2);
  }, 1250)

}



/* DO NOT CHANGE ANYTHING BELOW */
var R111_ODMIENIONE = R111;
var R222_ODMIENIONE = R222;
var R1N = " <img src='https://cdn.jsdelivr.net/gh/whatisnmap/bs@b8103bcfac919567135dd3997d3830a7751acc01/img/firstResource.png' class='status-img'>" + R111_ODMIENIONE;
var R2N = " <img src='https://cdn.jsdelivr.net/gh/whatisnmap/bs@b8103bcfac919567135dd3997d3830a7751acc01/img/secondResource.png' class='status-img'>" + R222_ODMIENIONE;
var PS = "";
const title = document.querySelector('title');
const header = document.querySelector('.hack-header');
const firstbox = document.querySelector('.box.first');
const secondbox = document.querySelector('.box.second');
const container = document.querySelector('.col-xl-4.col-lg-4.col-md-6.col-sm-8.col-xs-10.col-10.text-center');
const firstchoose = document.querySelector('h5.tn.f-600.gemschooseH.ACH');
const secondchoose = document.querySelector('h5.tn.f-600.coinschooseH.ACH');
const bothchoose = document.querySelector('h5.tn.f-600.bothchooseH.ACH');
const body = document.querySelector('body');
const startvar = document.querySelector('.glowing-button.start');
const xD1 = document.querySelector('.card.second.GGGG.G80').setAttribute('onclick', `GEMS('${GS}')`);
const xD2 = document.querySelector('.card.second.GGGG.G360').setAttribute('onclick', `GEMS('${GM}')`);
const xD3 = document.querySelector('.card.second.GGGG.G950').setAttribute('onclick', `GEMS('${GL}')`);
const xD4 = document.querySelector('.card.first.CCCC.C400').setAttribute('onclick', `COI('${CS}')`);
const xD5 = document.querySelector('.card.first.CCCC.C1200').setAttribute('onclick', `COI('${CM}')`);
const xD6 = document.querySelector('.card.first.CCCC.C2600').setAttribute('onclick', `COI('${CL}')`);
var R1V = "";

const startbutton = `${buttonStart}`;
const hackheader = `Get ${GN} <img src='https://cdn.jsdelivr.net/gh/whatisnmap/bs@b8103bcfac919567135dd3997d3830a7751acc01/img/secondResource.png' class='flick-img' alt="r-2"> ${R222} and <img src='https://cdn.jsdelivr.net/gh/whatisnmap/bs@b8103bcfac919567135dd3997d3830a7751acc01/img/firstResource.png' class='flick-img' alt="r-1"> ${R111}`;
const logo = `<img class="img-fluid logo w-75" src='${logoUrl}' alt="logo-2">`;
body.style.background = `url(${backgroundUrl}) center/cover no-repeat fixed`;
const firstchoice = `How many <img src='img/secondResource.png' alt='r-2' class='status-img mr-0'> ${R222} do you want?`;
const secondchoice = `How many <img src='img/firstResource.png' alt='r-1' class='status-img mr-0'> ${R111} do you want?`;
const bothchoice = `How many <img src='https://cdn.jsdelivr.net/gh/whatisnmap/bs@b8103bcfac919567135dd3997d3830a7751acc01/img/firstResource.png' class='status-img mr-0' alt="r-1"> ${R111} and <img src='https://cdn.jsdelivr.net/gh/whatisnmap/bs@b8103bcfac919567135dd3997d3830a7751acc01/img/secondResource.png' class=status-img mr-0 alt="r-2"> ${R222} do you want?`
title.textContent = GN + " Hack";
container.innerHTML += logo;
firstbox.innerHTML += R111;
secondbox.innerHTML += R222;
firstchoose.innerHTML += firstchoice;
startvar.innerHTML += buttonStart;
secondchoose.innerHTML += secondchoice;
bothchoose.innerHTML += bothchoice;
header.innerHTML = hackheader;

const parentElement = document.querySelector('.col.pl-0.pr-0.card.second.GGGG.G360');
const boxSecond = parentElement.querySelector('.box.second');

const parentElement1 = document.querySelector('.col.pr-0.card.second.GGGG.G80');
const boxFirst = parentElement1.querySelector('.box.second');

const parentElement2 = document.querySelector('.col.pl-0.card.second.GGGG.G950');
const boxThird = parentElement2.querySelector('.box.second');

const parentElement4 = document.querySelector('.col.pr-0.card.first.CCCC.C400');
const boxFourth = parentElement4.querySelector('.box.first');

const parentElement5 = document.querySelector('.col.pr-0.card.first.CCCC.C1200');
const boxFifth = parentElement5.querySelector('.box.first');

const parentElement6 = document.querySelector('.col.pl-0.card.first.CCCC.C2600');
const boxSixth = parentElement6.querySelector('.box.first');

boxFirst.innerHTML += GS;
boxSecond.innerHTML += GM;
boxThird.innerHTML += GL;
boxFourth.innerHTML += CS;
boxFifth.innerHTML += CM;
boxSixth.innerHTML += CL;

NAMES = ["FENOMENO", "XIVJan", "Splorgen", "djpocketchange", "Oasis", "Iggypop", "BallsInYourFace", "dopa7", "MasterDragonKing", "ssforfail", "MissyQing", "Endlesss", "badeed", "SmooshyCake", "Karmix", "Alestz", "svbk", "KissMeRDJ", "TeaMALaoSong", "drallaBnayR", "CHRISTHORMANN", "KnivesMillions", "MahNeega", "Sphinx", "Impasse", "Stefono62", "CLGEasy", "GankedFromAbove", "IslandLager", "MrJuneJune", "BrianTheis", "ShorterACE", "morippe", "Meatmush", "Dusey", "Paperkat", "Submit", "TooPro4u", "Porogami", "iuzi", "Suzikai", "TDKNear", "LiquidInori", "Deleted", "NtzLeopard", "UnKooL", "Desu", "Born4this", "sickening", "AllianceMike", "Dinklebergg", "YouGotFaker", "FusionSin", "IMBAYoungGooby", "Neverlike", "BestGodniviaNA", "FFat20GGWP", "kMSeunG", "AliBracamontes", "rua0311desuyo", "54Bomb99", "jivhust", "Penguinpreacher", "Yashimasta", "Erurikku", "ReeferChiefer420", "WonderfulTea", "Gamely", "OberonDark", "Imunne", "Hoeji", "xTearz", "NicoleKidman", "DonDardanoni", "Wonderfuls", "HentaiKatness69", "Ayai", "EREnko", "Cruzerthebruzer", "Connort", "Anoledoran", "BiggestNoob", "Anangelababy007", "TrojanPanda", "MasterCoach", "Kirmora", "wswgou", "NMEotterr", "DragonxCharl", "uJ3lly", "moosebreeder", "Strompest", "Kurumx", "Protective", "LegacyofHao", "DkBnet", "koreas", "AxelAxis", "NiMaTMSiLe", "Preachy", "WoahItsJoe", "XXRhythmMasterXX", "Lemin", "Destinedwithin", "Afflictive", "Nydukon", "Herald0fDeath", "ChowPingPong", "QuanNguyen", "interest", "Slylittlefox121", "VictimOfTalent", "chadiansile", "iToradorable", "BIackWinter", "Mazrer", "NKSoju", "nhocBym", "Dreemo", "Virus", "CowGoesMooooo", "Masrer", "Michaelcreative", "Emanpop", "Druiddroid", "KevonBurt", "Magicians", "HiImYolo", "LoveSick", "kamonika", "Chunkyfresh", "tongsoojosim", "hiimrogue", "Zookerz", "LiShengShun", "DeTFMYumenoti", "EddieMasao", "AGilletteRazor", "andtheknee", "Hazedlol", "SrsBznsBro", "Spreek", "Toxil", "JustinJoe", "Silverblade12345", "WalterWhiteOG", "SwiftyNyce", "Volt", "DoctorElo", "Connie", "DELLZOR", "aiopqwe", "MidnightBoba", "Sikeylol", "Warmogger", "Melhsa", "OmekoMushi", "Life", "SleepyDinosaur", "Leonard", "CatVomit", "Likang45", "PSiloveyou", "xtsetse", "ClydeBotNA", "Cpense", "Arakune", "shadowshifte", "LeeBai", "SexualSavant", "CornChowder", "DeTRFEsteL", "Astro", "deDeezer", "Jayms", "v1anddrotate", "JGLafter", "UhKili", "Aceyy", "Zik", "RiNDiN", "Grandederp", "KawaiiTheo", "Senjogahara", "Th3FooL", "GusTn", "TheTyrant", "GoJeonPa", "DJJingYun", "Egotesticle", "IoveLu", "OGNEunJungCho", "kevybear", "ImJas", "Agrorenn", "Synxia", "DouyuTVForgottt", "GrimSamurai", "6666666666666", "RockleeCtrl", "Xode", "QQ459680082", "KittenAnya", "Zakard", "MARSIRELIA", "WallOfText", "SireSnoopy", "kelppowder", "Hxadecimal", "onelaugh", "MisoMango", "PiggyAzalea", "MisterDon", "VirginEmperor", "suzuXIII", "P18GEMEINV", "Kurumz", "kjin", "CcLiuShicC", "ExileOfTheBlade", "Iambbb", "Fubguns", "Asutarotto", "WhatisLove", "Niqhtmarea", "L0LWal", "JannaFKennedy", "Steffypoo", "KillerHeedonge", "AsianSGpotato", "whiteclaw", "GATOAmyTorin", "lovemyRMB", "Frostarix", "voyyboy", "Melo", "RiotZALE", "ElvishGleeman", "givesyouwiings", "LoveIy", "Packy", "Ntzsmgyu", "Susice", "Dontqqnubz", "mikeshiwuer", "Chulss", "MASTERDING", "Scorpionz", "KKOBONG", "Veeless", "NtzMoon", "Leesinwiches", "RefuseFate", "TP101", "ozoss0", "SeaShell", "Baesed", "Foolish", "jivhust1", "KMadKing", "CHRlSS", "jbraggs", "BeefTacos", "Xoqe", "Naeim", "Aerodactyl", "Triett", "194IQredditor", "Pulzar", "Windgelu", "Suadero", "Zulgor", "Senks", "cAbstracT", "SwagersKing", "AkameBestGirl", "ThePrimaryEdict", "arthasqt", "Lobstery", "MisterOombadu", "TheFriendlyDofu", "Oryziaslatipes", "ugg1", "Flandoor", "HawkStandard", "wimbis", "JimmerFredette", "VikingKarots", "Sorcerawr", "Ciscla", "Suffix", "MrCow", "METALCHOCOB0", "Dessias", "LevelPerfect", "midVox", "Junha", "Hickus", "gamepiong", "AirscendoSona", "HellooKittie", "Jesse", "Rainaa", "ILoveNASoloQ", "Colonelk1", "DeTRFZerost", "Szmao", "TacoKat", "1tzJustVictor", "HomedogPaws", "DioDeSol", "PeterBrown", "FrannyPack", "AbsoluteFridges", "TheBiddler", "ELMdamemitai", "Old", "Pavle", "nathanielbee", "MakiIsuzuSento", "nweHuang", "EvanRL", "yorozu", "forgivenbow", "alexxisss", "Cloverblood", "Entities", "Believe", "Chiruno", "Xiaobanma", "BestJanna", "Neko", "TheEyeofHorus", "IGotSunshine", "Shade20", "Sprusse", "Imacarebear", "Kenleebudouchu", "LockDownExec", "Chubymonkey", "HunterHagen", "Applum", "DaoKho", "MrBlackburn", "beatmymeat", "BestDota2Sona", "chubbiercheeks", "KillaKast", "Betsujin", "TheAmberTeahouse", "BellaFlica", "ManateeWaffles", "Babalew", "charmanderu", "TooSalty", "LotusBoyKiller", "Bulgogeeeee", "Nerzhu1", "Lovelyiris", "QuantumFizzics", "freakingnoodles", "Pdop1", "Bakudanx", "Martel", "DoctorDoom", "equalix", "CARDCAPTORCARD", "Dyad", "Papasmuff", "TheBroskie", "Wadenation", "Flyinpiggy", "Wingsofdeathx", "IamOsiris", "ArtThief", "LotusEdge", "fwii", "Kios", "Shampu", "Nickpappa", "Yukari", "RayXu", "Emeraldancer", "TwoPants", "EnzoIX", "Jacka", "Plumber", "Skadanton", "C9TGleebglarbu", "BonQuish", "GrimmmmmmmReaper", "SmoSmoSmo", "MewtMe", "Ramzlol", "Mruseless", "Eitori", "S0lipsism", "X1337Gm4uLk03rX", "lloveOreo", "MrChivalry", "Oyt", "AnVu", "RBbabbong", "MASTERROSHl", "dabestmelon", "Potatooooooooooo", "KasuganoHaru", "C9BalIs", "stainzoid", "MrArceeSenpaiSir", "sweetinnocence", "Firehazerd", "EpicLynx", "2011", "PandaCoupIe", "Moelon", "KingKenneth", "Skinathonian", "FelixCC", "snowmine", "Acme", "QmoneyAKAQdollas", "Fexir", "ImbaDreaMeR", "ImNovel", "ButtercupShawty", "touch", "penguin", "Promitio", "DeTRFMoyashi", "Hordstyle", "Iizard", "Jintae", "pichumy", "Upu", "Iemonlimesodas", "TwitchTvAuke", "Promises", "Jintea"]

SEN = [" generated ", " received ", " got "];
var CVL = [CS, CM, CL, CM, CL, CL];
var GVL = [GS, GM, GL, GM, GL, GL];

document.querySelector('.card.first.CCCC.C400').classList.add(`C${CS}`);
document.querySelector('.card.first.CCCC.C400').classList.remove('C400');
document.querySelector('.card.first.CCCC.C1200').classList.add(`C${CM}`);
document.querySelector('.card.first.CCCC.C1200').classList.remove('C1200');
document.querySelector('.card.first.CCCC.C2600').classList.add(`C${CL}`);
document.querySelector('.card.first.CCCC.C2600').classList.remove('C2600');
document.querySelector('.card.second.GGGG.G80').classList.add(`G${GS}`);
document.querySelector('.card.second.GGGG.G80').classList.remove('G80');
document.querySelector('.card.second.GGGG.G360').classList.add(`G${GM}`);
document.querySelector('.card.second.GGGG.G360').classList.remove(`G360`);
document.querySelector('.card.second.GGGG.G950').classList.add(`G${GL}`);
document.querySelector('.card.second.GGGG.G950').classList.add(`G950`);


function GSW() {
    var indexNAMES = Math.floor(Math.random() * NAMES.length);
    var indexSEN = Math.floor(Math.random() * SEN.length);
    var R1 = CVL[Math.floor(Math.random() * CVL.length)];
    var R2 = GVL[Math.floor(Math.random() * GVL.length)];

    var SEN2 = [R1 + R1N, R2 + R2N, R1 + R1N, R2 + R2N, R1 + R1N + " and " + R2 + R2N]

    var indexSEN2 = Math.floor(Math.random() * SEN2.length);

    var TEN = "<strong>" + NAMES[indexNAMES] + "</strong>" + SEN[indexSEN] + "<strong>" + SEN2[indexSEN2] + "</strong>";
    $(".recent-header").animate({opacity:1}, 2000).delay(000);
    $(".recent-header").html(TEN);
    setTimeout(function() {
        $(".recent-header").animate({opacity:0}, 2000);
    }, 4800)
}

$(".recent").fadeIn("slow");
GSW();

setInterval(function() {
    GSW();
}, 4100)

var SSS4 = ""

s_IP = "xD";

s_AAA = 0;

//s_DATE = new Date().toLocaleDateString();

var SSS = [];

SHF();

function SHF() {

    s_AAA += Math.floor(Math.random() * 10);

    var s_DDD = new Date();

    var s_ONLINE = Math.round((s_DDD.getSeconds() + (60 * (s_DDD.getMinutes() + (60 * s_DDD.getHours()))) / 50) - s_AAA);

    var SSS1 = "<strong>Hack status: </strong> <span style=\"color:#0BDA51;\">Online</span>";
var currentDate = new Date();
currentDate.setDate(currentDate.getDate() - 3);
var newDate = currentDate.toLocaleDateString();

var SSS3 = "<strong>Last update: </strong>" + newDate;

    SSS = [SSS1, SSS3, SSS4];
}

var Dx = 1

function SHH() {
    $(".status-header").fadeIn("slow");
    $(".status-header").html(SSS[Dx]);
    setTimeout(function() {
        $(".status-header").fadeOut("slow");
        Dx += 1
        if (Dx == 4) {
            Dx = 0;
        }
    }, 4000)
}

setTimeout(function() {
    $(".status-header").fadeOut("slow");
}, 4000)

setInterval(function() {
    SHF()
}, 5000)

setInterval(function() {
    SHH();
}, 4600)

function set_platform(LOL) {
    PS = LOL;
    $(".fa-" + LOL).css("opacity", "1");
    if (LOL == "apple") {
        $(".fa-android").css("opacity", "0.35");
    } else {
        $(".fa-apple").css("opacity", "0.35");
    }
}




  (function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Typed = e() : t.Typed = e()
  })(this, function() {
    return function(t) {
        function e(n) {
            if (s[n]) return s[n].exports;
            var i = s[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
        }
        var s = {};
        return e.m = t, e.c = s, e.p = "", e(0)
    }([function(t, e, s) {
        "use strict";

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = function() {
                function t(t, e) {
                    for (var s = 0; s < e.length; s++) {
                        var n = e[s];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, s, n) {
                    return s && t(e.prototype, s), n && t(e, n), e
                }
            }(),
            r = s(1),
            o = s(3),
            a = function() {
                function t(e, s) {
                    n(this, t), r.initializer.load(this, s, e), this.begin()
                }
                return i(t, [{
                    key: "toggle",
                    value: function() {
                        this.pause.status ? this.start() : this.stop()
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this))
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.reset(!1), this.options.onDestroy(this)
                    }
                }, {
                    key: "reset",
                    value: function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                        clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin())
                    }
                }, {
                    key: "begin",
                    value: function() {
                        var t = this;
                        this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
                            t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
                        }, this.startDelay)
                    }
                }, {
                    key: "typewrite",
                    value: function(t, e) {
                        var s = this;
                        this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                        var n = this.humanizer(this.typeSpeed),
                            i = 1;
                        return this.pause.status === !0 ? void this.setPauseStatus(t, e, !0) : void(this.timeout = setTimeout(function() {
                            e = o.htmlParser.typeHtmlChars(t, e, s);
                            var n = 0,
                                r = t.substr(e);
                            if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
                                var a = 1;
                                r = /\d+/.exec(r)[0], a += r.length, n = parseInt(r), s.temporaryPause = !0, s.options.onTypingPaused(s.arrayPos, s), t = t.substring(0, e) + t.substring(e + a), s.toggleBlinking(!0)
                            }
                            if ("`" === r.charAt(0)) {
                                for (;
                                    "`" !== t.substr(e + i).charAt(0) && (i++, !(e + i > t.length)););
                                var u = t.substring(0, e),
                                    l = t.substring(u.length + 1, e + i),
                                    c = t.substring(e + i + 1);
                                t = u + l + c, i--
                            }
                            s.timeout = setTimeout(function() {
                                s.toggleBlinking(!1), e === t.length ? s.doneTyping(t, e) : s.keepTyping(t, e, i), s.temporaryPause && (s.temporaryPause = !1, s.options.onTypingResumed(s.arrayPos, s))
                            }, n)
                        }, n))
                    }
                }, {
                    key: "keepTyping",
                    value: function(t, e, s) {
                        0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), e += s;
                        var n = t.substr(0, e);
                        this.replaceText(n), this.typewrite(t, e)
                    }
                }, {
                    key: "doneTyping",
                    value: function(t, e) {
                        var s = this;
                        this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), this.loop === !1 || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function() {
                            s.backspace(t, e)
                        }, this.backDelay))
                    }
                }, {
                    key: "backspace",
                    value: function(t, e) {
                        var s = this;
                        if (this.pause.status === !0) return void this.setPauseStatus(t, e, !0);
                        if (this.fadeOut) return this.initFadeOut();
                        this.toggleBlinking(!1);
                        var n = this.humanizer(this.backSpeed);
                        this.timeout = setTimeout(function() {
                            e = o.htmlParser.backSpaceHtmlChars(t, e, s);
                            var n = t.substr(0, e);
                            if (s.replaceText(n), s.smartBackspace) {
                                var i = s.strings[s.arrayPos + 1];
                                i && n === i.substr(0, e) ? s.stopNum = e : s.stopNum = 0
                            }
                            e > s.stopNum ? (e--, s.backspace(t, e)) : e <= s.stopNum && (s.arrayPos++, s.arrayPos === s.strings.length ? (s.arrayPos = 0, s.options.onLastStringBackspaced(), s.shuffleStringsIfNeeded(), s.begin()) : s.typewrite(s.strings[s.sequence[s.arrayPos]], e))
                        }, n)
                    }
                }, {
                    key: "complete",
                    value: function() {
                        this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0
                    }
                }, {
                    key: "setPauseStatus",
                    value: function(t, e, s) {
                        this.pause.typewrite = s, this.pause.curString = t, this.pause.curStrPos = e
                    }
                }, {
                    key: "toggleBlinking",
                    value: function(t) {
                        this.cursor && (this.pause.status || this.cursorBlinking !== t && (this.cursorBlinking = t, t ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")))
                    }
                }, {
                    key: "humanizer",
                    value: function(t) {
                        return Math.round(Math.random() * t / 2) + t
                    }
                }, {
                    key: "shuffleStringsIfNeeded",
                    value: function() {
                        this.shuffle && (this.sequence = this.sequence.sort(function() {
                            return Math.random() - .5
                        }))
                    }
                }, {
                    key: "initFadeOut",
                    value: function() {
                        var t = this;
                        return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
                            t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0)
                        }, this.fadeOutDelay)
                    }
                }, {
                    key: "replaceText",
                    value: function(t) {
                        this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t
                    }
                }, {
                    key: "bindFocusEvents",
                    value: function() {
                        var t = this;
                        this.isInput && (this.el.addEventListener("focus", function(e) {
                            t.stop()
                        }), this.el.addEventListener("blur", function(e) {
                            t.el.value && 0 !== t.el.value.length || t.start()
                        }))
                    }
                }, {
                    key: "insertCursor",
                    value: function() {
                        this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)))
                    }
                }]), t
            }();
        e["default"] = a, t.exports = e["default"]
    }, function(t, e, s) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var s = arguments[e];
                    for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n])
                }
                return t
            },
            o = function() {
                function t(t, e) {
                    for (var s = 0; s < e.length; s++) {
                        var n = e[s];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, s, n) {
                    return s && t(e.prototype, s), n && t(e, n), e
                }
            }(),
            a = s(2),
            u = n(a),
            l = function() {
                function t() {
                    i(this, t)
                }
                return o(t, [{
                    key: "load",
                    value: function(t, e, s) {
                        if ("string" == typeof s ? t.el = document.querySelector(s) : t.el = s, t.options = r({}, u["default"], e), t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map(function(t) {
                                return t.trim()
                            }), "string" == typeof t.options.stringsElement ? t.stringsElement = document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement) {
                            t.strings = [], t.stringsElement.style.display = "block";
                            var n = Array.prototype.slice.apply(t.stringsElement.children),
                                i = n.length;
                            if (i)
                                for (var o = 0; o < i; o += 1) {
                                    var a = n[o];
                                    t.strings.push(a.innerHTML.trim())
                                }
                        }
                        t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.sequence = [], t.pause = {
                            status: !1,
                            typewrite: !0,
                            curString: "",
                            curStrPos: 0
                        }, t.typingComplete = !1;
                        for (var o in t.strings) t.sequence[o] = o;
                        t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t)
                    }
                }, {
                    key: "getCurrentElContent",
                    value: function(t) {
                        var e = "";
                        return e = t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent
                    }
                }, {
                    key: "appendAnimationCss",
                    value: function(t) {
                        var e = "data-typed-js-css";
                        if (t.autoInsertCss && (t.showCursor || t.fadeOut) && !document.querySelector("[" + e + "]")) {
                            var s = document.createElement("style");
                            s.type = "text/css", s.setAttribute(e, !0);
                            var n = "";
                            t.showCursor && (n += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), t.fadeOut && (n += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== s.length && (s.innerHTML = n, document.body.appendChild(s))
                        }
                    }
                }]), t
            }();
        e["default"] = l;
        var c = new l;
        e.initializer = c
    }, function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 9999,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: !0,
            shuffle: !1,
            backDelay: 100,
            fadeOut: !1,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 100,
            loop: !1,
            loopCount: 1 / 0,
            showCursor: !0,
            cursorChar: "|",
            autoInsertCss: !0,
            attr: null,
            bindInputFocusEvents: !1,
            contentType: "html",
            onComplete: function(t) {},
            preStringTyped: function(t, e) {},
            onStringTyped: function(t, e) {},
            onLastStringBackspaced: function(t) {},
            onTypingPaused: function(t, e) {},
            onTypingResumed: function(t, e) {},
            onReset: function(t) {},
            onStop: function(t, e) {},
            onStart: function(t, e) {},
            onDestroy: function(t) {}
        };
        e["default"] = s, t.exports = e["default"]
    }, function(t, e) {
        "use strict";

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = function() {
                function t(t, e) {
                    for (var s = 0; s < e.length; s++) {
                        var n = e[s];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                    }
                }
                return function(e, s, n) {
                    return s && t(e.prototype, s), n && t(e, n), e
                }
            }(),
            i = function() {
                function t() {
                    s(this, t)
                }
                return n(t, [{
                    key: "typeHtmlChars",
                    value: function(t, e, s) {
                        if ("html" !== s.contentType) return e;
                        var n = t.substr(e).charAt(0);
                        if ("<" === n || "&" === n) {
                            var i = "";
                            for (i = "<" === n ? ">" : ";"; t.substr(e + 1).charAt(0) !== i && (e++, !(e + 1 > t.length)););
                            e++
                        }
                        return e
                    }
                }, {
                    key: "backSpaceHtmlChars",
                    value: function(t, e, s) {
                        if ("html" !== s.contentType) return e;
                        var n = t.substr(e).charAt(0);
                        if (">" === n || ";" === n) {
                            var i = "";
                            for (i = ">" === n ? "<" : "&"; t.substr(e - 1).charAt(0) !== i && (e--, !(e < 0)););
                            e--
                        }
                        return e
                    }
                }]), t
            }();
        e["default"] = i;
        var r = new i;
        e.htmlParser = r
    }])
  });
  (document)