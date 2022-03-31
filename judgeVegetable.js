function judgeVegetable (vegetables, metric) {
  for (var i = 0; i < vegetables.length; i++)
  if (metric === "redness") {
    var scoreRedness = math.max(vegetables.redness);
    for (var l = 0; l < vegetables.length; l++) {
      if (scoreRedness === vegetable[l].redness) {
        var vegetableSubmitterWinnerRedness = vegetable[l].submitter;
        return vegetableSubmitterWinnerRedness;
      } else if (metric === "plumpness") {
        var scorePlumpness = math.max(vegetables.plumpness);
        for (var m = 0; m < vegetables.length; m++) {
          if (scorePlumpness === vegetable[m].plumpness) {
            var vegetableSubmitterWinnerPlumpness = vegetable[m].submitter;
            return vegetableSubmitterWinnerPlumpness;
          }
        }
      }
    }
  }