--- script.js (原始)
/* =========================================================
   THASINVERSE PREMIUM LEARNING ENGINE
   Version: 6.0 (Final Fixed - Loading Screen + All Features)
========================================================= */

const educationData = {
    "class6": {
        title: "Class 6",
        subtitle: "ষষ্ঠ শ্রেণি",
        type: "school",
        subjects: {
            "বিজ্ঞান": {
                icon: "fa-atom",
                videos: [
                    { title: "আলোর ঘটনা : ষষ্ঠ শ্রেণী বিজ্ঞান অধ্যায় ৯ | Lecture 01", url: "https://youtu.be/qX2j73eeJUc", description: "আলোর ঘটনা অধ্যায়ের প্রথম লেকচার" },
                    { title: "💎 আলোর প্রতিফলন 🔮 | আলোর ঘটনা | Lecture 02", url: "https://youtu.be/jwA1Gpve3eE", description: "আলোর প্রতিফলন সহজ ব্যাখ্যা" },
                    { title: "আলোর প্রতিসরণ | আলোর ঘটনা | Lecture 03", url: "https://youtu.be/sDnBbMbcZ1c", description: "আলোর প্রতিসরণ সহজভাবে" }
                ]
            },
            "গণিত": { icon: "fa-square-root-variable", videos: [] },
            "বাংলা": { icon: "fa-book", videos: [] },
            "ইংরেজি": { icon: "fa-language", videos: [] },
            "আইসিটি": { icon: "fa-computer", videos: [] }
        }
    },
    "class7": {
        title: "Class 7",
        subtitle: "সপ্তম শ্রেণি",
        type: "school",
        subjects: {
            "বিজ্ঞান": { icon: "fa-atom", videos: [] },
            "গণিত": { icon: "fa-square-root-variable", videos: [] },
            "বাংলা": { icon: "fa-book", videos: [] },
            "ইংরেজি": { icon: "fa-language", videos: [] },
            "আইসিটি": { icon: "fa-computer", videos: [] }
        }
    },
    "class8": {
        title: "Class 8",
        subtitle: "অষ্টম শ্রেণি",
        type: "school",
        subjects: {
            "বিজ্ঞান": { icon: "fa-atom", videos: [] },
            "গণিত": { icon: "fa-square-root-variable", videos: [] },
            "বাংলা": { icon: "fa-book", videos: [] },
            "ইংরেজি": { icon: "fa-language", videos: [] },
            "আইসিটি": { icon: "fa-computer", videos: [] }
        }
    },
    "ssc": {
        title: "SSC",
        subtitle: "Secondary School Certificate",
        type: "exam",
        subjects: {
            "Physics": {
                icon: "fa-atom",
                chapters: {
                    "অধ্যায় ১: ভৌত রাশি এবং পরিমাপ": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ২: গতি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৩: বল": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৪: কাজ, ক্ষমতা ও শক্তি": { academic: [], basic: [], oneshot: [{ title: "কাজ, ক্ষমতা ও শক্তি Final shot! 😳 | কাজ, ক্ষমতা ও শক্তি Oneshot | SSC 2026", url: "https://youtu.be/XrkGCqvZhcc" }] },
                    "অধ্যায় ৫: পদার্থের অবস্থা ও চাপ": { academic: [], basic: [{ title: "🔹 ৭৬ cm পারদ = ১ atm কেন? | পারদের চাপ | Atmospheric Pressure", url: "https://youtu.be/KtaCP4xhFrA" }], oneshot: [] },
                    "অধ্যায় ৬: বস্তুর ওপর তাপের প্রভাব": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৭: তরঙ্গ ও শব্দ": { academic: [], basic: [], oneshot: [{ title: "ফিজিক্স ৭ অধ্যায়ের Final shot! 😳 | তরঙ্গ ও শব্দ Oneshot | SSC 2026", url: "https://youtu.be/GbkZK74Hq1M" }] },
                    "অধ্যায় ৮: আলোর প্রতিফলন": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৯: আলোর প্রতিসরণ": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১০: স্থির তড়িৎ": { academic: [], basic: [{ title: "💭 বিভব পার্থক্য বুঝতে কি এখনো কষ্ট হয়?", url: "https://youtu.be/km6IZuxZXyQ" }], oneshot: [{ title: "স্থির বিদ্যুৎ Final shot! 😳 | স্থির বিদ্যুৎ Oneshot | SSC Physics chapter 10", url: "https://youtu.be/ba2QQRdjl4s" }] },
                    "অধ্যায় ১১: চল তড়িৎ": { academic: [], basic: [{ title: "💭 বিভব পার্থক্য বুঝতে কি এখনো কষ্ট হয়?", url: "https://youtu.be/km6IZuxZXyQ" }], oneshot: [] },
                    "অধ্যায় ১২: বিদ্যুতের চৌম্বক ক্রিয়া": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১৩: আধুনিক পদার্থবিজ্ঞান ও ইলেকট্রনিকস": { academic: [], basic: [], oneshot: [] }
                }
            },
            "Chemistry": {
                icon: "fa-flask",
                chapters: {
                    "অধ্যায় ১: রসায়নের ধারণা": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ২: পদার্থের অবস্থা": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৩: পদার্থের গঠন": { academic: [], basic: [{ title: "বোহারের ফর্মুলা mvr = nh/2π কীভাবে এলো?", url: "https://youtu.be/SGTDSkbarSk" }], oneshot: [] },
                    "অধ্যায় ৪: পর্যায় সারণি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৫: রাসায়নিক বন্ধন": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৬: মোলের ধারণা ও রাসায়নিক গণনা": { academic: [], basic: [{ title: "১ মোল আসলে কত? | অ্যাভোগাড্রোর সংখ্যা 6.022×10²³ সহজ ব্যাখ্যা", url: "https://youtu.be/Q8nRvIInk-4" }], oneshot: [] },
                    "অধ্যায় ৭: রাসায়নিক বিক্রিয়া": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৮: রসায়ন ও শক্তি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৯: এসিড-ক্ষারক সমতা": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১০: খনিজ সম্পদ: ধাতু ও অধাতু": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১১: খনিজ সম্পদ: জীবাশ্ম": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১২: আমাদের জীবনে রসায়ন": { academic: [], basic: [], oneshot: [] }
                }
            },
            "Higher Math": {
                icon: "fa-square-root-variable",
                chapters: {
                    "অধ্যায় ১: সেট ও ফাংশন": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ২: বীজগাণিতিক রাশি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৩: জ্যামিতি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৪: জ্যামিতিক অঙ্কন": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৫: সমীকরণ": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৬: অসমতা": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৭: অসীম ধারা": { academic: [], basic: [{ title: "🔍 অসীম সংখ্যা কি আসলেই অসীম?", url: "https://youtu.be/P07K4MigUXk" }, { title: "📘 SSC Math: অসীম সংখ্যা শেষবারের মতো ক্লিয়ার করো!", url: "https://youtu.be/bgMRUmhwRyI" }], oneshot: [] },
                    "অধ্যায় ৮: ত্রিকোণমিতি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৯: সূচকীয় ও লগারিদমীয় ফাংশন": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১০: দ্বিপদী বিস্তৃতি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১১: স্থানাঙ্ক জ্যামিতি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১২: সমতলীয় ভেক্টর": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১৩: ঘন জ্যামিতি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১৪: সম্ভাবনা": { academic: [], basic: [], oneshot: [] }
                }
            },
            "General Math": {
                icon: "fa-calculator",
                chapters: {
                    "অধ্যায় ১: বাস্তব সংখ্যা": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ২: সেট ও ফাংশন": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৩: বীজগাণিতিক রাশি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৪: সূচক ও লগারিদম": { academic: [], basic: [{ title: "বৈজ্ঞানিক পদ্ধতিতে সংখ্যার প্রকাশ | সহজভাবে ব্যাখ্যা", url: "https://youtu.be/aafAMZiQGkQ" }], oneshot: [] },
                    "অধ্যায় ৫: এক চলকবিশিষ্ট সমীকরণ": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৬: রেখা, কোণ ও ত্রিভুজ": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৭: ব্যবহারিক জ্যামিতি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৮: বৃত্ত": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৯: ত্রিকোণমিতিক অনুপাত": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১০: দূরত্ব ও উচ্চতা": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১১: বীজগাণিতিক অনুপাত ও সমানুপাত": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১২: দুই চলকবিশিষ্ট সরল সহ-সমীকরণ": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১৩: সসীম ধারা": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১৪: অনুপাত, সদৃশতা ও প্রতিসমতা": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১৫: ক্ষেত্রফল সম্পর্কিত উপপাদ্য ও সম্পাদ্য": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১৬: পরিমিতি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১৭: পরিসংখ্যান": { academic: [], basic: [], oneshot: [] }
                }
            },
            "Biology": { icon: "fa-dna", videos: [] }
        }
    },
    "hsc": {
        title: "HSC",
        subtitle: "Higher Secondary Certificate",
        type: "exam",
        subjects: {
            "Higher Math": {
                icon: "fa-square-root-variable",
                videos: [
                    { title: "Matrix ও Determinant-এর গুণ একবারেই পরিষ্কার", url: "https://youtu.be/RjN7vuQLQAA" },
                    { title: "দুইটি সরলরেখার মধ্যবর্তী কোণ নির্ণয়", url: "https://youtu.be/m-3a_Gs56SE" },
                    { title: "🔍 অসীম সংখ্যা কি আসলেই অসীম?", url: "https://youtu.be/P07K4MigUXk" },
                    { title: "📘 HSC Math: অসীম সংখ্যা শেষবারের মতো ক্লিয়ার করো!", url: "https://youtu.be/bgMRUmhwRyI" },
                    { title: "বৈজ্ঞানিক পদ্ধতিতে সংখ্যার প্রকাশ", url: "https://youtu.be/aafAMZiQGkQ" }
                ]
            },
            "Physics": {
                icon: "fa-atom",
                videos: [
                    { title: "💭 বিভব পার্থক্য বুঝতে কি এখনো কষ্ট হয়?", url: "https://youtu.be/km6IZuxZXyQ" },
                    { title: "🔹 ৭৬ cm পারদ = ১ atm কেন?", url: "https://youtu.be/KtaCP4xhFrA" }
                ]
            },
            "Biology": {
                icon: "fa-dna",
                videos: [{ title: "HSC 2027 Translation | mRNA থেকে Protein কীভাবে তৈরি হয়?", url: "https://youtu.be/wX-LK8ou0W8" }]
            },
            "Chemistry": {
                icon: "fa-flask",
                videos: [
                    { title: "বোহারের ফর্মুলা mvr = nh/2π কীভাবে এলো?", url: "https://youtu.be/SGTDSkbarSk" },
                    { title: "১ মোল আসলে কত? | অ্যাভোগাড্রোর সংখ্যা", url: "https://youtu.be/Q8nRvIInk-4" }
                ]
            }
        }
    }
};

let currentLevel = "home";
let selectedClass = null;
let selectedSubject = null;
let selectedChapter = null;
let soundEnabled = true;
let audioContext = null;

document.addEventListener("DOMContentLoaded", function() {
    initializeWebsite();
});

function initializeWebsite() {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    setupLoadingScreen();
    setupSoundSystem();
    setupMobileMenu();
    setupScrollProgress();
    setupBackToTop();
    setupRevealAnimation();
    setupNavigation();
    setupCounters();
    showClasses();
}

function setupLoadingScreen() {
    var loadingScreen = document.getElementById("loadingScreen");
    if (!loadingScreen) return;
    
    setTimeout(function() {
        loadingScreen.style.transition = "opacity 0.8s ease";
        loadingScreen.style.opacity = "0";
        
        setTimeout(function() {
            loadingScreen.style.display = "none";
        }, 900);
    }, 2500);
}

function showHome() {
    currentLevel = "home";
}

function openClasses() {
    playUISound("success");
    var classesSection = document.getElementById("classes");
    if (classesSection) {
        classesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(function() {
        showClasses();
    }, 300);
}

function showClasses() {
    currentLevel = "classes";
    selectedClass = null;
    selectedSubject = null;
    selectedChapter = null;

    var container = document.getElementById("classContent");
    if (!container) return;

    var html = '<div class="learning-path reveal">';
    html += '<div class="path-header"><div><span class="path-label">SELECT YOUR LEVEL</span><h3>তোমার Academic Level নির্বাচন করো</h3></div>';
    html += '<div class="path-icon"><i class="fa-solid fa-layer-group"></i></div></div>';
    html += '<div class="class-grid">';
    html += createClassCard("class6", "Class 6", "ষষ্ঠ শ্রেণি", "school", "fa-atom", "Subject Select");
    html += createClassCard("class7", "Class 7", "সপ্তম শ্রেণি", "school", "fa-flask", "Subject Select");
    html += createClassCard("class8", "Class 8", "অষ্টম শ্রেণি", "school", "fa-brain", "Subject Select");
    html += createClassCard("ssc", "SSC", "Secondary School Certificate", "exam", "fa-graduation-cap", "Subject Select");
    html += createClassCard("hsc", "HSC", "Higher Secondary Certificate", "exam", "fa-user-graduate", "Subject Select");
    html += '</div></div>';

    container.innerHTML = html;
    activateRevealElements();
}

function createClassCard(key, title, subtitle, type, icon, action) {
    var typeLabel = (type === "exam") ? "EXAM LEVEL" : "SCHOOL LEVEL";
    var num = key.replace("class", "").toUpperCase();

    return '<button class="class-card sound-btn" data-sound="open" onclick="selectClass(\'' + key + '\')">' +
        '<div class="class-card-glow"></div>' +
        '<div class="class-card-top"><div class="class-icon"><i class="fa-solid ' + icon + '"></i></div>' +
        '<span class="class-type">' + typeLabel + '</span></div>' +
        '<div class="class-card-content"><h3>' + title + '</h3><p>' + subtitle + '</p></div>' +
        '<div class="class-card-bottom"><span>' + action + '</span><i class="fa-solid fa-arrow-right"></i></div>' +
        '<div class="card-number">' + num + '</div></button>';
}

function selectClass(classKey) {
    playUISound("open");
    selectedClass = classKey;
    var data = educationData[classKey];
    if (!data) return;
    showSubjectSelection(classKey);
}

function showSubjectSelection(classKey) {
    currentLevel = "subjects";
    var data = educationData[classKey];
    var container = document.getElementById("classContent");
    if (!container) return;

    var headingText, descriptionText, iconClass, iconExtraClass;

    if (data.type === "exam") {
        headingText = "Subject নির্বাচন করো";
        descriptionText = data.subtitle + " — একটি subject নির্বাচন করো, তারপর সেই subject এর ভিডিও দেখতে পারবে।";
        iconClass = "fa-graduation-cap";
        iconExtraClass = " exam";
    } else {
        headingText = "Subject Select করো";
        descriptionText = data.subtitle + " এর জন্য একটি subject নির্বাচন করো।";
        iconClass = "fa-book-open";
        iconExtraClass = "";
    }

    var subjectsHTML = "";
    var subjects = Object.keys(data.subjects);
    for (var i = 0; i < subjects.length; i++) {
        var subject = subjects[i];
        var info = data.subjects[subject];
        subjectsHTML += createSubjectCard(classKey, subject, info);
    }

    var html = '<div class="inner-navigation"><button onclick="showClasses()" class="back-button sound-btn"><i class="fa-solid fa-arrow-left"></i> All Classes</button></div>';
    html += '<div class="selection-header reveal"><div class="selection-icon' + iconExtraClass + '"><i class="fa-solid ' + iconClass + '"></i></div>';
    html += '<div><span>' + data.title + '</span><h2>' + headingText + '</h2><p>' + descriptionText + '</p></div></div>';
    html += '<div class="subject-grid">' + subjectsHTML + '</div>';

    container.innerHTML = html;
    activateRevealElements();
}

function createSubjectCard(classKey, subject, info) {
    var count = 0;
    if (info.chapters) {
        var chapterKeys = Object.keys(info.chapters);
        for (var i = 0; i < chapterKeys.length; i++) {
            var chapter = info.chapters[chapterKeys[i]];
            count += chapter.academic.length + chapter.basic.length + chapter.oneshot.length;
        }
    } else if (info.videos) {
        count = info.videos.length;
    }

    var videoText = (count > 0) ? (count + 'টি ভিডিও available') : 'ভিডিও শিগগিরই আসছে';

    return '<button class="subject-card sound-btn" data-sound="open" onclick="openSubject(\'' + classKey + '\', \'' + escapeQuotes(subject) + '\')">' +
        '<div class="subject-icon"><i class="fa-solid ' + info.icon + '"></i></div>' +
        '<div class="subject-details"><span class="subject-small">SUBJECT</span><h3>' + subject + '</h3>' +
        '<p>' + videoText + '</p></div>' +
        '<div class="subject-arrow"><i class="fa-solid fa-chevron-right"></i></div></button>';
}

function openSubject(classKey, subject) {
    playUISound("success");
    selectedClass = classKey;
    selectedSubject = subject;
    var data = educationData[classKey].subjects[subject];

    if (data.chapters) {
        showChapterList(classKey, subject);
    } else {
        var classTitle = educationData[classKey].title;
        var classSubtitle = educationData[classKey].subtitle;
        showVideoList(classTitle + " • " + subject, classSubtitle, data.videos, "showSubjectSelection");
    }
}

function showChapterList(classKey, subject) {
    currentLevel = "chapters";
    selectedClass = classKey;
    selectedSubject = subject;
    selectedChapter = null;

    var data = educationData[classKey].subjects[subject];
    var container = document.getElementById("classContent");
    if (!container) return;

    var chapters = Object.keys(data.chapters);
    var chapterCount = chapters.length;

    var chaptersHTML = "";
    for (var i = 0; i < chapters.length; i++) {
        var chapter = chapters[i];
        var info = data.chapters[chapter];
        chaptersHTML += createChapterCard(classKey, subject, chapter, info);
    }

    var html = '<div class="inner-navigation"><button onclick="showSubjectSelection(\'' + classKey + '\')" class="back-button sound-btn"><i class="fa-solid fa-arrow-left"></i> Subjects</button></div>';
    html += '<div class="selection-header reveal"><div class="selection-icon"><i class="fa-solid ' + data.icon + '"></i></div>';
    html += '<div><span>' + subject + '</span><h2>Chapter List</h2><p>' + educationData[classKey].title + ' - ' + subject + ' এর ' + chapterCount + 'টি অধ্যায়</p></div></div>';
    html += '<div class="chapter-grid">' + chaptersHTML + '</div>';

    container.innerHTML = html;
    activateRevealElements();
}

function createChapterCard(classKey, subject, chapter, info) {
    var totalVideos = info.academic.length + info.basic.length + info.oneshot.length;
    var videoText = (totalVideos > 0) ? (totalVideos + 'টি ভিডিও available') : 'ভিডিও শিগগিরই আসছে';

    return '<button class="chapter-card sound-btn" data-sound="open" onclick="showClassTypeOptions(\'' + classKey + '\', \'' + escapeQuotes(subject) + '\', \'' + escapeQuotes(chapter) + '\')">' +
        '<div class="chapter-card-glow"></div>' +
        '<div class="chapter-card-top"><div class="chapter-icon"><i class="fa-solid fa-book-bookmark"></i></div><span class="chapter-type">CHAPTER</span></div>' +
        '<div class="chapter-card-content"><h3>' + chapter + '</h3><p>' + videoText + '</p></div>' +
        '<div class="chapter-card-bottom"><span>View Classes</span><i class="fa-solid fa-arrow-right"></i></div></button>';
}

function showClassTypeOptions(classKey, subject, chapter) {
    currentLevel = "classTypes";
    selectedClass = classKey;
    selectedSubject = subject;
    selectedChapter = chapter;

    var data = educationData[classKey].subjects[subject].chapters[chapter];
    var container = document.getElementById("classContent");
    if (!container) return;

    var html = '<div class="inner-navigation"><button onclick="showChapterList(\'' + classKey + '\', \'' + escapeQuotes(subject) + '\')" class="back-button sound-btn"><i class="fa-solid fa-arrow-left"></i> Chapters</button></div>';
    html += '<div class="selection-header reveal"><div class="selection-icon"><i class="fa-solid fa-list-check"></i></div>';
    html += '<div><span>' + subject + ' — ' + chapter + '</span><h2>Class Type নির্বাচন করো</h2><p>তোমার পছন্দমতো class type বেছে নাও</p></div></div>';
    html += '<div class="class-type-grid">';
    html += createClassTypeCard("academic", "Academic Class", "fa-graduation-cap", "বিস্তারিত ও গভীর পাঠ", data.academic.length);
    html += createClassTypeCard("basic", "Basic Class", "fa-lightbulb", "সহজ ও মৌলিক পাঠ", data.basic.length);
    html += createClassTypeCard("oneshot", "Oneshot Class", "fa-bolt", "দ্রুত সম্পূর্ণ রিভিশন", data.oneshot.length);
    html += '</div>';

    container.innerHTML = html;
    activateRevealElements();
}

function createClassTypeCard(type, title, icon, description, videoCount) {
    var videoText = (videoCount > 0) ? (videoCount + 'টি ভিডিও') : 'শিগগিরই আসছে';

    return '<button class="class-type-card sound-btn" data-sound="open" onclick="openClassType(\'' + type + '\')">' +
        '<div class="class-type-icon"><i class="fa-solid ' + icon + '"></i></div>' +
        '<div class="class-type-content"><h3>' + title + '</h3><p>' + description + '</p>' +
        '<span class="video-badge">' + videoText + '</span></div>' +
        '<div class="class-type-arrow"><i class="fa-solid fa-chevron-right"></i></div></button>';
}

function openClassType(classType) {
    playUISound("success");
    var data = educationData[selectedClass].subjects[selectedSubject].chapters[selectedChapter];
    var videos = data[classType];

    var typeNames = { academic: "Academic Class", basic: "Basic Class", oneshot: "Oneshot Class" };
    var title = selectedSubject + " — " + selectedChapter + " • " + typeNames[classType];
    var subtitle = educationData[selectedClass].title;

    showVideoList(title, subtitle, videos, "showClassTypeOptions");
}

function showVideoList(title, subtitle, videos, backFunction) {
    currentLevel = "videos";
    var container = document.getElementById("classContent");
    if (!container) return;

    var backAction;
    if (backFunction === "showClassTypeOptions") {
        backAction = "showClassTypeOptions('" + selectedClass + "', '" + escapeQuotes(selectedSubject) + "', '" + escapeQuotes(selectedChapter) + "')";
    } else {
        backAction = "showSubjectSelection('" + selectedClass + "')";
    }

    var videosHTML = "";
    if (videos.length > 0) {
        videosHTML = '<div class="video-grid single-subject-grid">';
        for (var i = 0; i < videos.length; i++) {
            videosHTML += createVideoCard(videos[i]);
        }
        videosHTML += '</div>';
    } else {
        videosHTML = '<div class="empty-video big-empty reveal"><div class="empty-icon"><i class="fa-solid fa-video-slash"></i></div><h3>এই section-এ video এখনো নেই</h3><p>নতুন video যুক্ত হলে এখানে দেখা যাবে।</p></div>';
    }

    var html = '<div class="inner-navigation"><button onclick="' + backAction + '" class="back-button sound-btn"><i class="fa-solid fa-arrow-left"></i> Back</button></div>';
    html += '<div class="selection-header reveal"><div class="selection-icon"><i class="fa-solid fa-play"></i></div>';
    html += '<div><span>' + title + '</span><h2>Video Classes</h2><p>' + subtitle + '</p></div></div>';
    html += videosHTML;

    container.innerHTML = html;
    activateRevealElements();
}

function createVideoCard(video) {
    var videoId = getYoutubeId(video.url);
    var thumbnail = videoId ? ("https://i.ytimg.com/vi/" + videoId + "/hqdefault.jpg") : "assets/logo.png";

    return '<div onclick="openVideoModal(\'' + video.url + '\')" class="video-card sound-btn" data-sound="success" role="button" tabindex="0">' +
        '<div class="video-thumbnail"><img src="' + thumbnail + '" alt="' + escapeHTML(video.title) + '" loading="lazy">' +
        '<div class="thumbnail-overlay"></div><div class="play-button"><i class="fa-solid fa-play"></i></div>' +
        '<div class="youtube-label"><i class="fa-brands fa-youtube"></i> YouTube</div></div>' +
        '<div class="video-information"><div class="video-number"><i class="fa-solid fa-play-circle"></i> VIDEO CLASS</div>' +
        '<h3>' + escapeHTML(video.title) + '</h3>' +
        '<div class="watch-row"><span>Watch on Site</span><i class="fa-solid fa-play"></i></div></div></div>';
}

function getYoutubeId(url) {
    if (!url) return null;
    var patterns = [
        /youtu\.be\/([^?&]+)/,
        /youtube\.com\/watch\?v=([^?&]+)/,
        /youtube\.com\/shorts\/([^?&]+)/,
        /youtube\.com\/embed\/([^?&]+)/
    ];
    for (var i = 0; i < patterns.length; i++) {
        var match = url.match(patterns[i]);
        if (match) return match[1];
    }
    return null;
}

function openVideoModal(url) {
    var videoId = getYoutubeId(url);
    if (!videoId) {
        window.open(url, "_blank", "noopener,noreferrer");
        return;
    }
    var modal = document.getElementById("videoModal");
    var frame = document.getElementById("youtubeFrame");
    frame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&rel=0";
    modal.classList.add("active");
}

function closeVideoModal() {
    var modal = document.getElementById("videoModal");
    var frame = document.getElementById("youtubeFrame");
    frame.src = "";
    modal.classList.remove("active");
}

function setupSoundSystem() {
    var toggle = document.getElementById("soundToggle");
    if (toggle) {
        toggle.addEventListener("click", function() {
            soundEnabled = !soundEnabled;
            updateSoundButton();
            if (soundEnabled) playUISound("success");
        });
    }
    document.addEventListener("click", function(event) {
        var element = event.target.closest(".sound-btn");
        if (!element || element.id === "soundToggle") return;
        var soundType = element.dataset.sound || "click";
        playUISound(soundType);
        createRipple(element, event);
    });
}

function updateSoundButton() {
    var button = document.getElementById("soundToggle");
    if (!button) return;
    if (soundEnabled) {
        button.innerHTML = '<i class="fa-solid fa-volume-high"></i><span>Sound</span>';
        button.classList.remove("sound-off");
    } else {
        button.innerHTML = '<i class="fa-solid fa-volume-xmark"></i><span>Muted</span>';
        button.classList.add("sound-off");
    }
}

function playUISound(type) {
    if (!soundEnabled) return;
    type = type || "click";
    try {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioContext.state === "suspended") {
            audioContext.resume();
        }
        var now = audioContext.currentTime;
        var oscillator = audioContext.createOscillator();
        var gain = audioContext.createGain();
        var frequency = 440;
        var duration = 0.12;
        if (type === "success") { frequency = 680; duration = 0.18; }
        else if (type === "open") { frequency = 560; duration = 0.14; }
        else if (type === "soft") { frequency = 380; duration = 0.08; }
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(frequency, now);
        oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.25, now + duration);
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.045, now + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
        oscillator.connect(gain);
        gain.connect(audioContext.destination);
        oscillator.start(now);
        oscillator.stop(now + duration + 0.02);
    } catch (error) {
        console.log("Audio unavailable");
    }
}

function createRipple(element, event) {
    if (element.classList.contains("class-card") || element.classList.contains("subject-card") || element.classList.contains("video-card") || element.classList.contains("chapter-card") || element.classList.contains("class-type-card")) {
        return;
    }
    var rect = element.getBoundingClientRect();
    var ripple = document.createElement("span");
    var size = Math.max(rect.width, rect.height);
    ripple.className = "click-ripple";
    ripple.style.width = size + "px";
    ripple.style.height = size + "px";
    ripple.style.left = (event.clientX - rect.left - size / 2) + "px";
    ripple.style.top = (event.clientY - rect.top - size / 2) + "px";
    element.appendChild(ripple);
    setTimeout(function() { ripple.remove(); }, 650);
}

function setupMobileMenu() {
    var button = document.getElementById("mobileMenuButton");
    var menu = document.getElementById("mobileMenu");
    if (!button || !menu) return;
    button.addEventListener("click", function() {
        playUISound("open");
        menu.classList.toggle("active");
        var icon = button.querySelector("i");
        if (menu.classList.contains("active")) {
            icon.className = "fa-solid fa-xmark";
        } else {
            icon.className = "fa-solid fa-bars";
        }
    });
    var links = menu.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function() {
            menu.classList.remove("active");
            var icon = button.querySelector("i");
            icon.className = "fa-solid fa-bars";
        });
    }
}

function setupScrollProgress() {
    var progress = document.getElementById("scrollProgress");
    window.addEventListener("scroll", function() {
        var scrollTop = window.scrollY;
        var height = document.documentElement.scrollHeight - window.innerHeight;
        var percentage = height > 0 ? (scrollTop / height) * 100 : 0;
        progress.style.width = percentage + "%";
    }, { passive: true });
}

function setupBackToTop() {
    var button = document.getElementById("backToTop");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 600) {
            button.classList.add("visible");
        } else {
            button.classList.remove("visible");
        }
    }, { passive: true });
    button.addEventListener("click", function() {
        playUISound("soft");
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

function setupNavigation() {
    var links = document.querySelectorAll(".nav-link");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function() {
            for (var j = 0; j < links.length; j++) {
                links[j].classList.remove("active");
            }
            var href = this.getAttribute("href");
            if (href && href.charAt(0) === "#") {
                this.classList.add("active");
            }
        });
    }
}

function setupRevealAnimation() {
    activateRevealElements();
}

function activateRevealElements() {
    var elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    if (!("IntersectionObserver" in window)) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add("visible");
        }
        return;
    }
    var observer = new IntersectionObserver(function(entries) {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
                entries[i].target.classList.add("visible");
                observer.unobserve(entries[i].target);
            }
        }
    }, { threshold: 0.08, rootMargin: "0px 0px -50px 0px" });
    for (var i = 0; i < elements.length; i++) {
        observer.observe(elements[i]);
    }
}

function setupCounters() {
    var counters = document.querySelectorAll("[data-counter]");
    var observer = new IntersectionObserver(function(entries) {
        for (var i = 0; i < entries.length; i++) {
            if (!entries[i].isIntersecting) return;
            var element = entries[i].target;
            var target = Number(element.dataset.counter);
            animateCounter(element, target);
            observer.unobserve(element);
        }
    }, { threshold: 0.5 });
    for (var i = 0; i < counters.length; i++) {
        observer.observe(counters[i]);
    }
}

function animateCounter(element, target) {
    var duration = 1600;
    var start = performance.now();
    function update(currentTime) {
        var elapsed = currentTime - start;
        var progress = Math.min(elapsed / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var value = Math.floor(target * eased);
        element.textContent = value.toLocaleString("en-US");
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
}

function escapeHTML(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function escapeQuotes(value) {
    return String(value).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeVideoModal();
    }
});

var videoModalEl = document.getElementById("videoModal");
if (videoModalEl) {
    videoModalEl.addEventListener("click", function(event) {
        if (event.target.classList.contains("video-modal")) {
            closeVideoModal();
        }
    });
}

window.addEventListener("error", function(error) {
    console.log("ThasinVerse:", error.message);
});


+++ script.js (修改后)
/* =========================================================
   THASINVERSE PREMIUM LEARNING ENGINE
   Version: 6.0 (Final - All Features Fixed)
========================================================= */

const educationData = {
    "class6": {
        title: "Class 6",
        subtitle: "ষষ্ঠ শ্রেণি",
        type: "school",
        subjects: {
            "বিজ্ঞান": {
                icon: "fa-atom",
                videos: [
                    { title: "আলোর ঘটনা : ষষ্ঠ শ্রেণী বিজ্ঞান অধ্যায় ৯ | Lecture 01", url: "https://youtu.be/qX2j73eeJUc", description: "আলোর ঘটনা অধ্যায়ের প্রথম লেকচার" },
                    { title: "💎 আলোর প্রতিফলন 🔮 | আলোর ঘটনা | Lecture 02", url: "https://youtu.be/jwA1Gpve3eE", description: "আলোর প্রতিফলন সহজ ব্যাখ্যা" },
                    { title: "আলোর প্রতিসরণ | আলোর ঘটনা | Lecture 03", url: "https://youtu.be/sDnBbMbcZ1c", description: "আলোর প্রতিসরণ সহজভাবে" }
                ]
            },
            "গণিত": { icon: "fa-square-root-variable", videos: [] },
            "বাংলা": { icon: "fa-book", videos: [] },
            "ইংরেজি": { icon: "fa-language", videos: [] },
            "আইসিটি": { icon: "fa-computer", videos: [] }
        }
    },
    "class7": {
        title: "Class 7",
        subtitle: "সপ্তম শ্রেণি",
        type: "school",
        subjects: {
            "বিজ্ঞান": { icon: "fa-atom", videos: [] },
            "গণিত": { icon: "fa-square-root-variable", videos: [] },
            "বাংলা": { icon: "fa-book", videos: [] },
            "ইংরেজি": { icon: "fa-language", videos: [] },
            "আইসিটি": { icon: "fa-computer", videos: [] }
        }
    },
    "class8": {
        title: "Class 8",
        subtitle: "অষ্টম শ্রেণি",
        type: "school",
        subjects: {
            "বিজ্ঞান": { icon: "fa-atom", videos: [] },
            "গণিত": { icon: "fa-square-root-variable", videos: [] },
            "বাংলা": { icon: "fa-book", videos: [] },
            "ইংরেজি": { icon: "fa-language", videos: [] },
            "আইসিটি": { icon: "fa-computer", videos: [] }
        }
    },
    "ssc": {
        title: "SSC",
        subtitle: "Secondary School Certificate",
        type: "exam",
        subjects: {
            "Physics": {
                icon: "fa-atom",
                chapters: {
                    "অধ্যায় ১: ভৌত রাশি এবং পরিমাপ": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ২: গতি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৩: বল": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৪: কাজ, ক্ষমতা ও শক্তি": { academic: [], basic: [], oneshot: [{ title: "কাজ, ক্ষমতা ও শক্তি Final shot! 😳 | কাজ, ক্ষমতা ও শক্তি Oneshot | SSC 2026", url: "https://youtu.be/XrkGCqvZhcc" }] },
                    "অধ্যায় ৫: পদার্থের অবস্থা ও চাপ": { academic: [], basic: [{ title: "🔹 ৭৬ cm পারদ = ১ atm কেন? | পারদের চাপ | Atmospheric Pressure", url: "https://youtu.be/KtaCP4xhFrA" }], oneshot: [] },
                    "অধ্যায় ৬: বস্তুর ওপর তাপের প্রভাব": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৭: তরঙ্গ ও শব্দ": { academic: [], basic: [], oneshot: [{ title: "ফিজিক্স ৭ অধ্যায়ের Final shot! 😳 | তরঙ্গ ও শব্দ Oneshot | SSC 2026", url: "https://youtu.be/GbkZK74Hq1M" }] },
                    "অধ্যায় ৮: আলোর প্রতিফলন": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৯: আলোর প্রতিসরণ": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১০: স্থির তড়িৎ": { academic: [], basic: [{ title: "💭 বিভব পার্থক্য বুঝতে কি এখনো কষ্ট হয়?", url: "https://youtu.be/km6IZuxZXyQ" }], oneshot: [{ title: "স্থির বিদ্যুৎ Final shot! 😳 | স্থির বিদ্যুৎ Oneshot | SSC Physics chapter 10", url: "https://youtu.be/ba2QQRdjl4s" }] },
                    "অধ্যায় ১১: চল তড়িৎ": { academic: [], basic: [{ title: "💭 বিভব পার্থক্য বুঝতে কি এখনো কষ্ট হয়?", url: "https://youtu.be/km6IZuxZXyQ" }], oneshot: [] },
                    "অধ্যায় ১২: বিদ্যুতের চৌম্বক ক্রিয়া": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১৩: আধুনিক পদার্থবিজ্ঞান ও ইলেকট্রনিকস": { academic: [], basic: [], oneshot: [] }
                }
            },
            "Chemistry": {
                icon: "fa-flask",
                chapters: {
                    "অধ্যায় ১: রসায়নের ধারণা": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ২: পদার্থের অবস্থা": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৩: পদার্থের গঠন": { academic: [], basic: [{ title: "বোহারের ফর্মুলা mvr = nh/2π কীভাবে এলো?", url: "https://youtu.be/SGTDSkbarSk" }], oneshot: [] },
                    "অধ্যায় ৪: পর্যায় সারণি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৫: রাসায়নিক বন্ধন": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৬: মোলের ধারণা ও রাসায়নিক গণনা": { academic: [], basic: [{ title: "১ মোল আসলে কত? | অ্যাভোগাড্রোর সংখ্যা 6.022×10²³ সহজ ব্যাখ্যা", url: "https://youtu.be/Q8nRvIInk-4" }], oneshot: [] },
                    "অধ্যায় ৭: রাসায়নিক বিক্রিয়া": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৮: রসায়ন ও শক্তি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৯: এসিড-ক্ষারক সমতা": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১০: খনিজ সম্পদ: ধাতু ও অধাতু": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১১: খনিজ সম্পদ: জীবাশ্ম": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১২: আমাদের জীবনে রসায়ন": { academic: [], basic: [], oneshot: [] }
                }
            },
            "Higher Math": {
                icon: "fa-square-root-variable",
                chapters: {
                    "অধ্যায় ১: সেট ও ফাংশন": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ২: বীজগাণিতিক রাশি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৩: জ্যামিতি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৪: জ্যামিতিক অঙ্কন": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৫: সমীকরণ": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৬: অসমতা": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৭: অসীম ধারা": { academic: [], basic: [{ title: "🔍 অসীম সংখ্যা কি আসলেই অসীম?", url: "https://youtu.be/P07K4MigUXk" }, { title: "📘 SSC Math: অসীম সংখ্যা শেষবারের মতো ক্লিয়ার করো!", url: "https://youtu.be/bgMRUmhwRyI" }], oneshot: [] },
                    "অধ্যায় ৮: ত্রিকোণমিতি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৯: সূচকীয় ও লগারিদমীয় ফাংশন": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১০: দ্বিপদী বিস্তৃতি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১১: স্থানাঙ্ক জ্যামিতি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১২: সমতলীয় ভেক্টর": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১৩: ঘন জ্যামিতি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১৪: সম্ভাবনা": { academic: [], basic: [], oneshot: [] }
                }
            },
            "General Math": {
                icon: "fa-calculator",
                chapters: {
                    "অধ্যায় ১: বাস্তব সংখ্যা": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ২: সেট ও ফাংশন": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৩: বীজগাণিতিক রাশি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৪: সূচক ও লগারিদম": { academic: [], basic: [{ title: "বৈজ্ঞানিক পদ্ধতিতে সংখ্যার প্রকাশ | সহজভাবে ব্যাখ্যা", url: "https://youtu.be/aafAMZiQGkQ" }], oneshot: [] },
                    "অধ্যায় ৫: এক চলকবিশিষ্ট সমীকরণ": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৬: রেখা, কোণ ও ত্রিভুজ": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৭: ব্যবহারিক জ্যামিতি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৮: বৃত্ত": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ৯: ত্রিকোণমিতিক অনুপাত": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১০: দূরত্ব ও উচ্চতা": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১১: বীজগাণিতিক অনুপাত ও সমানুপাত": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১২: দুই চলকবিশিষ্ট সরল সহ-সমীকরণ": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১৩: সসীম ধারা": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১৪: অনুপাত, সদৃশতা ও প্রতিসমতা": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১৫: ক্ষেত্রফল সম্পর্কিত উপপাদ্য ও সম্পাদ্য": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১৬: পরিমিতি": { academic: [], basic: [], oneshot: [] },
                    "অধ্যায় ১৭: পরিসংখ্যান": { academic: [], basic: [], oneshot: [] }
                }
            },
            "Biology": { icon: "fa-dna", videos: [] }
        }
    },
    "hsc": {
        title: "HSC",
        subtitle: "Higher Secondary Certificate",
        type: "exam",
        subjects: {
            "Higher Math": {
                icon: "fa-square-root-variable",
                videos: [
                    { title: "Matrix ও Determinant-এর গুণ একবারেই পরিষ্কার", url: "https://youtu.be/RjN7vuQLQAA" },
                    { title: "দুইটি সরলরেখার মধ্যবর্তী কোণ নির্ণয়", url: "https://youtu.be/m-3a_Gs56SE" },
                    { title: "🔍 অসীম সংখ্যা কি আসলেই অসীম?", url: "https://youtu.be/P07K4MigUXk" },
                    { title: "📘 HSC Math: অসীম সংখ্যা শেষবারের মতো ক্লিয়ার করো!", url: "https://youtu.be/bgMRUmhwRyI" },
                    { title: "বৈজ্ঞানিক পদ্ধতিতে সংখ্যার প্রকাশ", url: "https://youtu.be/aafAMZiQGkQ" }
                ]
            },
            "Physics": {
                icon: "fa-atom",
                videos: [
                    { title: "💭 বিভব পার্থক্য বুঝতে কি এখনো কষ্ট হয়?", url: "https://youtu.be/km6IZuxZXyQ" },
                    { title: "🔹 ৭৬ cm পারদ = ১ atm কেন?", url: "https://youtu.be/KtaCP4xhFrA" }
                ]
            },
            "Biology": {
                icon: "fa-dna",
                videos: [{ title: "HSC 2027 Translation | mRNA থেকে Protein কীভাবে তৈরি হয়?", url: "https://youtu.be/wX-LK8ou0W8" }]
            },
            "Chemistry": {
                icon: "fa-flask",
                videos: [
                    { title: "বোহারের ফর্মুলা mvr = nh/2π কীভাবে এলো?", url: "https://youtu.be/SGTDSkbarSk" },
                    { title: "১ মোল আসলে কত? | অ্যাভোগাড্রোর সংখ্যা", url: "https://youtu.be/Q8nRvIInk-4" }
                ]
            }
        }
    }
};

var currentLevel = "home";
var selectedClass = null;
var selectedSubject = null;
var selectedChapter = null;
var soundEnabled = true;
var audioContext = null;

document.addEventListener("DOMContentLoaded", function() {
    initializeWebsite();
});

function initializeWebsite() {
    var yearEl = document.getElementById("currentYear");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    setupLoadingScreen();
    setupSoundSystem();
    setupMobileMenu();
    setupScrollProgress();
    setupBackToTop();
    setupRevealAnimation();
    setupNavigation();
    setupCounters();
    showClasses();
}

function setupLoadingScreen() {
    var loadingScreen = document.getElementById("loadingScreen");
    if (!loadingScreen) return;

    setTimeout(function() {
        loadingScreen.style.opacity = "0";
        loadingScreen.style.visibility = "hidden";

        setTimeout(function() {
            loadingScreen.style.display = "none";
        }, 800);
    }, 2500);
}

function showHome() {
    currentLevel = "home";
}

function openClasses() {
    playUISound("success");
    var classesSection = document.getElementById("classes");
    if (classesSection) {
        classesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(function() {
        showClasses();
    }, 300);
}

function showClasses() {
    currentLevel = "classes";
    selectedClass = null;
    selectedSubject = null;
    selectedChapter = null;

    var container = document.getElementById("classContent");
    if (!container) return;

    var html = '<div class="learning-path reveal">';
    html += '<div class="path-header"><div><span class="path-label">SELECT YOUR LEVEL</span><h3>তোমার Academic Level নির্বাচন করো</h3></div>';
    html += '<div class="path-icon"><i class="fa-solid fa-layer-group"></i></div></div>';
    html += '<div class="class-grid">';
    html += createClassCard("class6", "Class 6", "ষষ্ঠ শ্রেণি", "school", "fa-atom", "Subject Select");
    html += createClassCard("class7", "Class 7", "সপ্তম শ্রেণি", "school", "fa-flask", "Subject Select");
    html += createClassCard("class8", "Class 8", "অষ্টম শ্রেণি", "school", "fa-brain", "Subject Select");
    html += createClassCard("ssc", "SSC", "Secondary School Certificate", "exam", "fa-graduation-cap", "Subject Select");
    html += createClassCard("hsc", "HSC", "Higher Secondary Certificate", "exam", "fa-user-graduate", "Subject Select");
    html += '</div></div>';

    container.innerHTML = html;
    activateRevealElements();
}

function createClassCard(key, title, subtitle, type, icon, action) {
    var typeLabel = (type === "exam") ? "EXAM LEVEL" : "SCHOOL LEVEL";
    var num = key.replace("class", "").toUpperCase();

    return '<button class="class-card sound-btn" data-sound="open" onclick="selectClass(\'' + key + '\')">' +
        '<div class="class-card-glow"></div>' +
        '<div class="class-card-top"><div class="class-icon"><i class="fa-solid ' + icon + '"></i></div>' +
        '<span class="class-type">' + typeLabel + '</span></div>' +
        '<div class="class-card-content"><h3>' + title + '</h3><p>' + subtitle + '</p></div>' +
        '<div class="class-card-bottom"><span>' + action + '</span><i class="fa-solid fa-arrow-right"></i></div>' +
        '<div class="card-number">' + num + '</div></button>';
}

function selectClass(classKey) {
    playUISound("open");
    selectedClass = classKey;
    var data = educationData[classKey];
    if (!data) return;
    showSubjectSelection(classKey);
}

function showSubjectSelection(classKey) {
    currentLevel = "subjects";
    var data = educationData[classKey];
    var container = document.getElementById("classContent");
    if (!container) return;

    var headingText, descriptionText, iconClass, iconExtraClass;

    if (data.type === "exam") {
        headingText = "Subject নির্বাচন করো";
        descriptionText = data.subtitle + " — একটি subject নির্বাচন করো, তারপর সেই subject এর ভিডিও দেখতে পারবে।";
        iconClass = "fa-graduation-cap";
        iconExtraClass = " exam";
    } else {
        headingText = "Subject Select করো";
        descriptionText = data.subtitle + " এর জন্য একটি subject নির্বাচন করো।";
        iconClass = "fa-book-open";
        iconExtraClass = "";
    }

    var subjectsHTML = "";
    var subjects = Object.keys(data.subjects);
    for (var i = 0; i < subjects.length; i++) {
        var subject = subjects[i];
        var info = data.subjects[subject];
        subjectsHTML += createSubjectCard(classKey, subject, info);
    }

    var html = '<div class="inner-navigation"><button onclick="showClasses()" class="back-button sound-btn"><i class="fa-solid fa-arrow-left"></i> All Classes</button></div>';
    html += '<div class="selection-header reveal"><div class="selection-icon' + iconExtraClass + '"><i class="fa-solid ' + iconClass + '"></i></div>';
    html += '<div><span>' + data.title + '</span><h2>' + headingText + '</h2><p>' + descriptionText + '</p></div></div>';
    html += '<div class="subject-grid">' + subjectsHTML + '</div>';

    container.innerHTML = html;
    activateRevealElements();
}

function createSubjectCard(classKey, subject, info) {
    var count = 0;
    if (info.chapters) {
        var chapterKeys = Object.keys(info.chapters);
        for (var i = 0; i < chapterKeys.length; i++) {
            var chapter = info.chapters[chapterKeys[i]];
            count += chapter.academic.length + chapter.basic.length + chapter.oneshot.length;
        }
    } else if (info.videos) {
        count = info.videos.length;
    }

    var videoText = (count > 0) ? (count + 'টি ভিডিও available') : 'ভিডিও শিগগিরই আসছে';

    return '<button class="subject-card sound-btn" data-sound="open" onclick="openSubject(\'' + classKey + '\', \'' + escapeQuotes(subject) + '\')">' +
        '<div class="subject-icon"><i class="fa-solid ' + info.icon + '"></i></div>' +
        '<div class="subject-details"><span class="subject-small">SUBJECT</span><h3>' + subject + '</h3>' +
        '<p>' + videoText + '</p></div>' +
        '<div class="subject-arrow"><i class="fa-solid fa-chevron-right"></i></div></button>';
}

function openSubject(classKey, subject) {
    playUISound("success");
    selectedClass = classKey;
    selectedSubject = subject;
    var data = educationData[classKey].subjects[subject];

    if (data.chapters) {
        showChapterList(classKey, subject);
    } else {
        var classTitle = educationData[classKey].title;
        var classSubtitle = educationData[classKey].subtitle;
        showVideoList(classTitle + " • " + subject, classSubtitle, data.videos, "showSubjectSelection");
    }
}

function showChapterList(classKey, subject) {
    currentLevel = "chapters";
    selectedClass = classKey;
    selectedSubject = subject;
    selectedChapter = null;

    var data = educationData[classKey].subjects[subject];
    var container = document.getElementById("classContent");
    if (!container) return;

    var chapters = Object.keys(data.chapters);
    var chapterCount = chapters.length;

    var chaptersHTML = "";
    for (var i = 0; i < chapters.length; i++) {
        var chapter = chapters[i];
        var info = data.chapters[chapter];
        chaptersHTML += createChapterCard(classKey, subject, chapter, info);
    }

    var html = '<div class="inner-navigation"><button onclick="showSubjectSelection(\'' + classKey + '\')" class="back-button sound-btn"><i class="fa-solid fa-arrow-left"></i> Subjects</button></div>';
    html += '<div class="selection-header reveal"><div class="selection-icon"><i class="fa-solid ' + data.icon + '"></i></div>';
    html += '<div><span>' + subject + '</span><h2>Chapter List</h2><p>' + educationData[classKey].title + ' - ' + subject + ' এর ' + chapterCount + 'টি অধ্যায়</p></div></div>';
    html += '<div class="chapter-grid">' + chaptersHTML + '</div>';

    container.innerHTML = html;
    activateRevealElements();
}

function createChapterCard(classKey, subject, chapter, info) {
    var totalVideos = info.academic.length + info.basic.length + info.oneshot.length;
    var videoText = (totalVideos > 0) ? (totalVideos + 'টি ভিডিও available') : 'ভিডিও শিগগিরই আসছে';

    return '<button class="chapter-card sound-btn" data-sound="open" onclick="showClassTypeOptions(\'' + classKey + '\', \'' + escapeQuotes(subject) + '\', \'' + escapeQuotes(chapter) + '\')">' +
        '<div class="chapter-card-glow"></div>' +
        '<div class="chapter-card-top"><div class="chapter-icon"><i class="fa-solid fa-book-bookmark"></i></div><span class="chapter-type">CHAPTER</span></div>' +
        '<div class="chapter-card-content"><h3>' + chapter + '</h3><p>' + videoText + '</p></div>' +
        '<div class="chapter-card-bottom"><span>View Classes</span><i class="fa-solid fa-arrow-right"></i></div></button>';
}

function showClassTypeOptions(classKey, subject, chapter) {
    currentLevel = "classTypes";
    selectedClass = classKey;
    selectedSubject = subject;
    selectedChapter = chapter;

    var data = educationData[classKey].subjects[subject].chapters[chapter];
    var container = document.getElementById("classContent");
    if (!container) return;

    var html = '<div class="inner-navigation"><button onclick="showChapterList(\'' + classKey + '\', \'' + escapeQuotes(subject) + '\')" class="back-button sound-btn"><i class="fa-solid fa-arrow-left"></i> Chapters</button></div>';
    html += '<div class="selection-header reveal"><div class="selection-icon"><i class="fa-solid fa-list-check"></i></div>';
    html += '<div><span>' + subject + ' — ' + chapter + '</span><h2>Class Type নির্বাচন করো</h2><p>তোমার পছন্দমতো class type বেছে নাও</p></div></div>';
    html += '<div class="class-type-grid">';
    html += createClassTypeCard("academic", "Academic Class", "fa-graduation-cap", "বিস্তারিত ও গভীর পাঠ", data.academic.length);
    html += createClassTypeCard("basic", "Basic Class", "fa-lightbulb", "সহজ ও মৌলিক পাঠ", data.basic.length);
    html += createClassTypeCard("oneshot", "Oneshot Class", "fa-bolt", "দ্রুত সম্পূর্ণ রিভিশন", data.oneshot.length);
    html += '</div>';

    container.innerHTML = html;
    activateRevealElements();
}

function createClassTypeCard(type, title, icon, description, videoCount) {
    var videoText = (videoCount > 0) ? (videoCount + 'টি ভিডিও') : 'শিগগিরই আসছে';

    return '<button class="class-type-card sound-btn" data-sound="open" onclick="openClassType(\'' + type + '\')">' +
        '<div class="class-type-icon"><i class="fa-solid ' + icon + '"></i></div>' +
        '<div class="class-type-content"><h3>' + title + '</h3><p>' + description + '</p>' +
        '<span class="video-badge">' + videoText + '</span></div>' +
        '<div class="class-type-arrow"><i class="fa-solid fa-chevron-right"></i></div></button>';
}

function openClassType(classType) {
    playUISound("success");
    var data = educationData[selectedClass].subjects[selectedSubject].chapters[selectedChapter];
    var videos = data[classType];

    var typeNames = { academic: "Academic Class", basic: "Basic Class", oneshot: "Oneshot Class" };
    var title = selectedSubject + " — " + selectedChapter + " • " + typeNames[classType];
    var subtitle = educationData[selectedClass].title;

    showVideoList(title, subtitle, videos, "showClassTypeOptions");
}

function showVideoList(title, subtitle, videos, backFunction) {
    currentLevel = "videos";
    var container = document.getElementById("classContent");
    if (!container) return;

    var backAction;
    if (backFunction === "showClassTypeOptions") {
        backAction = "showClassTypeOptions('" + selectedClass + "', '" + escapeQuotes(selectedSubject) + "', '" + escapeQuotes(selectedChapter) + "')";
    } else {
        backAction = "showSubjectSelection('" + selectedClass + "')";
    }

    var videosHTML = "";
    if (videos.length > 0) {
        videosHTML = '<div class="video-grid single-subject-grid">';
        for (var i = 0; i < videos.length; i++) {
            videosHTML += createVideoCard(videos[i]);
        }
        videosHTML += '</div>';
    } else {
        videosHTML = '<div class="empty-video big-empty reveal"><div class="empty-icon"><i class="fa-solid fa-video-slash"></i></div><h3>এই section-এ video এখনো নেই</h3><p>নতুন video যুক্ত হলে এখানে দেখা যাবে।</p></div>';
    }

    var html = '<div class="inner-navigation"><button onclick="' + backAction + '" class="back-button sound-btn"><i class="fa-solid fa-arrow-left"></i> Back</button></div>';
    html += '<div class="selection-header reveal"><div class="selection-icon"><i class="fa-solid fa-play"></i></div>';
    html += '<div><span>' + title + '</span><h2>Video Classes</h2><p>' + subtitle + '</p></div></div>';
    html += videosHTML;

    container.innerHTML = html;
    activateRevealElements();
}

function createVideoCard(video) {
    var videoId = getYoutubeId(video.url);
    var thumbnail = videoId ? ("https://i.ytimg.com/vi/" + videoId + "/hqdefault.jpg") : "assets/logo.png";

    return '<div onclick="openVideoModal(\'' + video.url + '\')" class="video-card sound-btn" data-sound="success" role="button" tabindex="0">' +
        '<div class="video-thumbnail"><img src="' + thumbnail + '" alt="' + escapeHTML(video.title) + '" loading="lazy">' +
        '<div class="thumbnail-overlay"></div><div class="play-button"><i class="fa-solid fa-play"></i></div>' +
        '<div class="youtube-label"><i class="fa-brands fa-youtube"></i> YouTube</div></div>' +
        '<div class="video-information"><div class="video-number"><i class="fa-solid fa-play-circle"></i> VIDEO CLASS</div>' +
        '<h3>' + escapeHTML(video.title) + '</h3>' +
        '<div class="watch-row"><span>Watch on Site</span><i class="fa-solid fa-play"></i></div></div></div>';
}

function getYoutubeId(url) {
    if (!url) return null;
    var patterns = [
        /youtu\.be\/([^?&]+)/,
        /youtube\.com\/watch\?v=([^?&]+)/,
        /youtube\.com\/shorts\/([^?&]+)/,
        /youtube\.com\/embed\/([^?&]+)/
    ];
    for (var i = 0; i < patterns.length; i++) {
        var match = url.match(patterns[i]);
        if (match) return match[1];
    }
    return null;
}

function openVideoModal(url) {
    var videoId = getYoutubeId(url);
    if (!videoId) {
        window.open(url, "_blank", "noopener,noreferrer");
        return;
    }
    var modal = document.getElementById("videoModal");
    var frame = document.getElementById("youtubeFrame");
    frame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&rel=0";
    modal.classList.add("active");
}

function closeVideoModal() {
    var modal = document.getElementById("videoModal");
    var frame = document.getElementById("youtubeFrame");
    frame.src = "";
    modal.classList.remove("active");
}

function setupSoundSystem() {
    var toggle = document.getElementById("soundToggle");
    if (toggle) {
        toggle.addEventListener("click", function() {
            soundEnabled = !soundEnabled;
            updateSoundButton();
            if (soundEnabled) playUISound("success");
        });
    }
    document.addEventListener("click", function(event) {
        var element = event.target.closest(".sound-btn");
        if (!element || element.id === "soundToggle") return;
        var soundType = element.dataset.sound || "click";
        playUISound(soundType);
        createRipple(element, event);
    });
}

function updateSoundButton() {
    var button = document.getElementById("soundToggle");
    if (!button) return;
    if (soundEnabled) {
        button.innerHTML = '<i class="fa-solid fa-volume-high"></i><span>Sound</span>';
        button.classList.remove("sound-off");
    } else {
        button.innerHTML = '<i class="fa-solid fa-volume-xmark"></i><span>Muted</span>';
        button.classList.add("sound-off");
    }
}

function playUISound(type) {
    if (!soundEnabled) return;
    type = type || "click";
    try {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioContext.state === "suspended") {
            audioContext.resume();
        }
        var now = audioContext.currentTime;
        var oscillator = audioContext.createOscillator();
        var gain = audioContext.createGain();
        var frequency = 440;
        var duration = 0.12;
        if (type === "success") { frequency = 680; duration = 0.18; }
        else if (type === "open") { frequency = 560; duration = 0.14; }
        else if (type === "soft") { frequency = 380; duration = 0.08; }
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(frequency, now);
        oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.25, now + duration);
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.045, now + 0.015);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
        oscillator.connect(gain);
        gain.connect(audioContext.destination);
        oscillator.start(now);
        oscillator.stop(now + duration + 0.02);
    } catch (error) {
        console.log("Audio unavailable");
    }
}

function createRipple(element, event) {
    if (element.classList.contains("class-card") || element.classList.contains("subject-card") || element.classList.contains("video-card") || element.classList.contains("chapter-card") || element.classList.contains("class-type-card")) {
        return;
    }
    var rect = element.getBoundingClientRect();
    var ripple = document.createElement("span");
    var size = Math.max(rect.width, rect.height);
    ripple.className = "click-ripple";
    ripple.style.width = size + "px";
    ripple.style.height = size + "px";
    ripple.style.left = (event.clientX - rect.left - size / 2) + "px";
    ripple.style.top = (event.clientY - rect.top - size / 2) + "px";
    element.appendChild(ripple);
    setTimeout(function() { ripple.remove(); }, 650);
}

function setupMobileMenu() {
    var button = document.getElementById("mobileMenuButton");
    var menu = document.getElementById("mobileMenu");
    if (!button || !menu) return;
    button.addEventListener("click", function() {
        playUISound("open");
        menu.classList.toggle("active");
        var icon = button.querySelector("i");
        if (menu.classList.contains("active")) {
            icon.className = "fa-solid fa-xmark";
        } else {
            icon.className = "fa-solid fa-bars";
        }
    });
    var links = menu.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function() {
            menu.classList.remove("active");
            var icon = button.querySelector("i");
            icon.className = "fa-solid fa-bars";
        });
    }
}

function setupScrollProgress() {
    var progress = document.getElementById("scrollProgress");
    window.addEventListener("scroll", function() {
        var scrollTop = window.scrollY;
        var height = document.documentElement.scrollHeight - window.innerHeight;
        var percentage = height > 0 ? (scrollTop / height) * 100 : 0;
        progress.style.width = percentage + "%";
    }, { passive: true });
}

function setupBackToTop() {
    var button = document.getElementById("backToTop");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 600) {
            button.classList.add("visible");
        } else {
            button.classList.remove("visible");
        }
    }, { passive: true });
    button.addEventListener("click", function() {
        playUISound("soft");
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

function setupNavigation() {
    var links = document.querySelectorAll(".nav-link");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function() {
            for (var j = 0; j < links.length; j++) {
                links[j].classList.remove("active");
            }
            var href = this.getAttribute("href");
            if (href && href.charAt(0) === "#") {
                this.classList.add("active");
            }
        });
    }
}

function setupRevealAnimation() {
    activateRevealElements();
}

function activateRevealElements() {
    var elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    if (!("IntersectionObserver" in window)) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add("visible");
        }
        return;
    }
    var observer = new IntersectionObserver(function(entries) {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
                entries[i].target.classList.add("visible");
                observer.unobserve(entries[i].target);
            }
        }
    }, { threshold: 0.08, rootMargin: "0px 0px -50px 0px" });
    for (var i = 0; i < elements.length; i++) {
        observer.observe(elements[i]);
    }
}

function setupCounters() {
    var counters = document.querySelectorAll("[data-counter]");
    var observer = new IntersectionObserver(function(entries) {
        for (var i = 0; i < entries.length; i++) {
            if (!entries[i].isIntersecting) return;
            var element = entries[i].target;
            var target = Number(element.dataset.counter);
            animateCounter(element, target);
            observer.unobserve(element);
        }
    }, { threshold: 0.5 });
    for (var i = 0; i < counters.length; i++) {
        observer.observe(counters[i]);
    }
}

function animateCounter(element, target) {
    var duration = 1600;
    var start = performance.now();
    function update(currentTime) {
        var elapsed = currentTime - start;
        var progress = Math.min(elapsed / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var value = Math.floor(target * eased);
        element.textContent = value.toLocaleString("en-US");
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
}

function escapeHTML(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

function escapeQuotes(value) {
    return String(value).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeVideoModal();
    }
});

var videoModalEl = document.getElementById("videoModal");
if (videoModalEl) {
    videoModalEl.addEventListener("click", function(event) {
        if (event.target.classList.contains("video-modal")) {
            closeVideoModal();
        }
    });
}

window.addEventListener("error", function(error) {
    console.log("ThasinVerse:", error.message);
});
