const checkAir = function (samples, threshold) {
  let counter = 0;
  for (const i of samples) if (i === "dirty") counter++ 
  return (counter / samples.length > threshold ? "Polluted " : "Clean" )
}