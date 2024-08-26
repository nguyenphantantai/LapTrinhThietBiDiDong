// Dữ liệu cho từng đội
const dolphinsData = [
    { score1: 96, score2: 108, score3: 89 },
    { score1: 97, score2: 112, score3: 101 },
    { score1: 97, score2: 112, score3: 101 }
  ];
  
  const koalasData = [
    { score1: 88, score2: 91, score3: 110 },
    { score1: 109, score2: 95, score3: 123 },
    { score1: 109, score2: 95, score3: 106 }
  ];
  
  // Hàm tính điểm trung bình cho từng đội
  function calculateAverageScore(scores) {
    return (scores.score1 + scores.score2 + scores.score3) / 3;
  }
  
  // Hàm xác định đội chiến thắng
  function determineWinner(dolphinsScore, koalasScore) {
    if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
      return "Dolphins";
    } else if (koalasScore > dolphinsScore && koalasScore >= 100) {
      return "Koalas";
    } else if (dolphinsScore === koalasScore && dolphinsScore >= 100 && koalasScore >= 100) {
      return "Draw";
    } else {
      return "No team wins the trophy";
    }
  }
  
  // Chạy thử với từng bộ dữ liệu
  for (let i = 0; i < dolphinsData.length; i++) {
    const dolphinsAverageScore = calculateAverageScore(dolphinsData[i]);
    const koalasAverageScore = calculateAverageScore(koalasData[i]);
    const winner = determineWinner(dolphinsAverageScore, koalasAverageScore);
    console.log(`Data ${i + 1}:`);
    console.log(`Dolphins average score: ${dolphinsAverageScore}`);
    console.log(`Koalas average score: ${koalasAverageScore}`);
    console.log(`Winner: ${winner}`);
    console.log();
  }