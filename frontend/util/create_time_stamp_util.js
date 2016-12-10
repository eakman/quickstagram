const createTimeStamp = (timeStamp) => {
  let now = Math.round(new Date().getTime()/1000.0);
  const interval = (now - timeStamp);
  if ( Math.round((interval / 31557600)) >= 1 ){
    return `${Math.round(interval / 31557600)}y`
  }
  else if ( Math.round((interval / (86400 * 7))) >= 1 ){
    return `${Math.round(interval / (86400 * 7))}w`
  }
  else if ( Math.round(interval / 86400) >= 1){
    return `${Math.round(interval / 86400)}d`
  }
  else if ( Math.round(interval / 3600) >= 1){
    return `${Math.round(interval / 3600)}h`
  }
  else if ( Math.round((interval / 60)) >= 1){
    return `${Math.round(interval / 60)}m`
  }
  else {
    return `${interval}s`
  }
};

export default createTimeStamp;
