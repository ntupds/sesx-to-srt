export default function srtTimecodeParser(sesxPoint, sampleRate){
  const timecode = (sesxPoint / sampleRate).toFixed(3);

  const decimalPart = Math.floor(timecode);
  const fractionalPart = parseInt(timecode.toString().split(".")[1]);

  const HHMMSS = secondToHHMMSS(decimalPart);
  let millisecond = '';
  if(fractionalPart<100 && fractionalPart>=10){
    millisecond = '0'+fractionalPart.toString();
  }else if(fractionalPart<10){
    millisecond = '00'+fractionalPart.toString();
  }else {
    millisecond = fractionalPart.toString();
  }

  return HHMMSS+','+ millisecond;
}

/**credits to powtac
* http://stackoverflow.com/questions/6312993/javascript-seconds-to-time-string-with-format-hhmmss
*/
function secondToHHMMSS(second){
  let hours = Math.floor(second / 3600);
  let minutes = Math.floor((second - (hours * 3600)) / 60);
  let seconds = second - (hours * 3600) - (minutes * 60);
  if (hours   < 10) { hours = "0" + hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }
  return hours+':'+minutes+':'+seconds;
}
