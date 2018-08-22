// Returns the appropriate flag for the number of points, as defined in the threshold array of the dimension
function getFlagFunc(points) {
    var flag = "green";
    for (var i = 0; i < this.thresholds.length; i++) {
        if (points <= this.thresholds[i].threshold) {
            flag = this.thresholds[i].flag;
            break;
        }
    }
    return flag;
}

// Returns the appropriate recommendation for the number of points, as defined in the threshold array of the dimension
function getRecommendationFunc(points, language) {
    var recommendation = "";
    for (var i = 0; i < this.thresholds.length; i++) {
        if (points <= this.thresholds[i].threshold) {
            recommendation = this.thresholds[i].text[language];
            break;
        }
    }
    return recommendation;
}

// Dimensions array. Main source of configuration
// Generated: https://docs.google.com/spreadsheets/d/1v7dVGAhHRSV1ybshYs411ncf1PKGxtkGgRVRq1MZSqs/edit?usp=sharing
var dimension = [];
dimension[1] = {
    name: { DE: "Technologie" },
    questions: [],
    points: 0,
    evaluations: [],
    thresholds: [],
    getFlag: getFlagFunc,
    getRecommendation: getRecommendationFunc
};
dimension[2] = {
    name: { DE: "Führung" },
    questions: [],
    points: 0,
    evaluations: [],
    thresholds: [],
    getFlag: getFlagFunc,
    getRecommendation: getRecommendationFunc
};
dimension[3] = {
    name: { DE: "Prozesse und Weisungen" },
    questions: [],
    points: 0,
    evaluations: [],
    thresholds: [],
    getFlag: getFlagFunc,
    getRecommendation: getRecommendationFunc
};
dimension[4] = {
    name: { DE: "Kommunikation" },
    questions: [],
    points: 0,
    evaluations: [],
    thresholds: [],
    getFlag: getFlagFunc,
    getRecommendation: getRecommendationFunc
};
dimension[5] = {
    name: { DE: "Kunden" },
    questions: [],
    points: 0,
    evaluations: [],
    thresholds: [],
    getFlag: getFlagFunc,
    getRecommendation: getRecommendationFunc
};
dimension[6] = {
    name: { DE: "Kultur" },
    questions: [],
    points: 0,
    evaluations: [],
    thresholds: [],
    getFlag: getFlagFunc,
    getRecommendation: getRecommendationFunc
};
dimension[7] = {
    name: { DE: "Strategie und Markt" },
    questions: [],
    points: 0,
    evaluations: [],
    thresholds: [],
    getFlag: getFlagFunc,
    getRecommendation: getRecommendationFunc
};

dimension[1].questions.push("q1");
dimension[1].questions.push("q2");
dimension[1].questions.push("q3");
dimension[2].questions.push("q4");
dimension[2].questions.push("q5");
dimension[3].questions.push("q6");
dimension[4].questions.push("q7");
dimension[4].questions.push("q8");
dimension[5].questions.push("q9");
dimension[6].questions.push("q10");
dimension[6].questions.push("q11");
dimension[6].questions.push("q12");
dimension[7].questions.push("q13");

dimension[1].thresholds.push({
    threshold: 29,
    flag: "red",
    text: {
        DE:
            "Der Zugriff auf arbeitsrelevante Daten ist eine Grundvoraussetzung, damit Coworking funktioniert"
    }
});
dimension[1].thresholds.push({
    threshold: 75,
    flag: "yellow",
    text: {
        DE:
            "Ihre technologischen Grundlagen sind vorhanden, damit Coworking funktionieren kann. Achten Sie auf die Datensicherheit und auf einen möglichst einfachen Austausch untereinander."
    }
});
dimension[1].thresholds.push({
    threshold: 100,
    flag: "green",
    text: {
        DE:
            "Sie haben die technologischen Voraussetzungen, um das Potenzial von Coworking zu nutzen."
    }
});
dimension[2].thresholds.push({
    threshold: 49,
    flag: "red",
    text: { DE: "Coworking ist ein neues Element für Ihre Führungskräfte." }
});
dimension[2].thresholds.push({
    threshold: 74,
    flag: "yellow",
    text: {
        DE:
            "Vertrauen Sie in Ihre Führungskräfte und lassen Sie sie mit Coworking ein Experiment starten und erste Erfahrungen sammeln."
    }
});
dimension[2].thresholds.push({
    threshold: 100,
    flag: "green",
    text: { DE: "Ihre Führungskräfte sind fit, legen Sie los." }
});
dimension[3].thresholds.push({
    threshold: 49,
    flag: "red",
    text: {
        DE:
            "Prüfen Sie, welche Haltung zu ortsunabhängiger Arbeit die Geschäftsleitung vertritt und ob die Möglichkeiten besteht, liberalere und selbstbestimmtere Regeln zu formulieren. Allenfalls gestalten Sie dazu ein passendes Experiment."
    }
});
dimension[3].thresholds.push({
    threshold: 74,
    flag: "yellow",
    text: {
        DE:
            "Analysieren Sie, welche Weisungen allenfalls angepasst werden müssen und starten Sie ein Experiment."
    }
});
dimension[3].thresholds.push({
    threshold: 100,
    flag: "green",
    text: { DE: "Sie können loslegen." }
});
dimension[4].thresholds.push({
    threshold: 74,
    flag: "yellow",
    text: {
        DE:
            "Ihre Kommunikation ist geprägt von direktem physischen Kontakt. Überlegen Sie sich, welche Auswirkungen die Arbeit in einem Coworking für die Mitarbeitenden wie auch für die Teams haben."
    }
});
dimension[4].thresholds.push({
    threshold: 100,
    flag: "green",
    text: {
        DE:
            "Ihre Kommunikationsprozesse erlauben ortsunabhängige Arbeit. Legen Sie los und schauen Sie sich unsere Abos an…."
    }
});
dimension[5].thresholds.push({
    threshold: 49,
    flag: "red",
    text: {
        DE:
            "Die Auswirkungen auf Kunden sind gut zu prüfen, bevor Sie Coworking ausprobieren."
    }
});
dimension[5].thresholds.push({
    threshold: 74,
    flag: "yellow",
    text: {
        DE:
            "Schätzen Sie ab, welche Auswirkungen Coworking auf Ihre Kunden hat und kommunizieren Sie wo notwendig proaktiv."
    }
});
dimension[5].thresholds.push({
    threshold: 100,
    flag: "green",
    text: {
        DE: "Die Auswirkungen auf die Kunden sind absehbar, Sie können loslegen!"
    }
});
dimension[6].thresholds.push({
    threshold: 49,
    flag: "red",
    text: {
        DE:
            "Coworking und Kollaboration ist in Ihrer Unternehmung noch wenig breit verankert. Welche Schritte sind notwendig, um das Kontrollbedürfnis ausreichend sicherzustellen und um feste Strukturen aufzubrechen? Welche Elemente müssen bei ergebnisoffenen Experimenten zwingend geplant werden? Denken Sie daran „Culture eats strategy for breakfast“ - thematisieren Sie Ihre Kulturwerte."
    }
});
dimension[6].thresholds.push({
    threshold: 74,
    flag: "yellow",
    text: {
        DE:
            "Sie haben bereits erste Erfahrungen gemacht und bei Ihnen ist eine gewisse Aufbruchstimmung spürbar, fahren Sie damit weiter mit konkreten umsetzbaren Schritten. Coworking kann ein Element der Kulturveränderung sein."
    }
});
dimension[6].thresholds.push({
    threshold: 100,
    flag: "green",
    text: {
        DE:
            "Herzliche Gratulation, Ihre Unternehmung schöpft bereits viel Potenzial aus, das eine vertrauensvolle Arbeit mit sich bringt. Fahren Sie damit weiter, wir freuen uns, Sie bald bei VillageOffice begrüssen zu dürfen."
    }
});
dimension[7].thresholds.push({
    threshold: 59,
    flag: "yellow",
    text: {
        DE:
            "Trotz dieser absehbaren Entwicklung interessieren Sie sich für Coworking. Uns interessiert das „Warum“. Wir freuen uns auf einen Austausch."
    }
});
dimension[7].thresholds.push({
    threshold: 100,
    flag: "green",
    text: {
        DE:
            "Mit Coworking nutzen Sie das Potenzial, im Netzwerk und gemeinsam unternehmensübergreifend zu arbeiten und zu lernen."
    }
});

// This function is called as soon as the DOM is ready. It will get the GET-parameters from the URL and display the content
function ready() {
    var urlString = window.location.href;
    var url = new URL(urlString);
    var elem = document.getElementsByClassName("assess-q1");
    var result = "";

    // Add all points per dimension
    // ----------------------------
    // We're iterating through all dimension and within each dimension through all assigned question.
    // We look up the points per question which are made available by ZOHO Survey as GET parameters in the form ?q1=20&Q2=50 etc.
    // If there should be multiple identical keys, the url.searchParams.get will only take the FIRST parameter into consideration.
    // We save the points in the evaluations array in the dimension, since we cannot know in advance how many parameters are actually
    // going to be delivered. That's why we calculate the mean value in a second step, by iterating over the evaluations array.
    dimension.forEach(function (currentDimension) {
        currentDimension.questions.forEach(function (currentQuestion) {
            // Get the value from ZOHO Survey
            var currentValue = parseInt(url.searchParams.get(currentQuestion), 10);
            // Save the value in the evaluations array
            if (Number.isInteger(currentValue)) {
                currentDimension.evaluations.push(currentValue);
            }
        });

        // Calculate the mean value
        currentDimension.evaluations.forEach(function (currentEvaluation) {
            currentDimension.points += Math.round(
                currentEvaluation / currentDimension.evaluations.length
            );
        });

        result +=
            "<li>" +
            currentDimension.name.DE +
            ": " +
            currentDimension.points +
            "</li><br />";
        result += currentDimension.getFlag(currentDimension.points) + "<br />";
        result += currentDimension.getRecommendation(currentDimension.points, "DE");
    });

    elem[0].innerHTML = "<ol>" + result + "</ol>";
}

document.addEventListener("DOMContentLoaded", ready);  