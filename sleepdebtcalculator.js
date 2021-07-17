let getSleepHours = day => {
    if(day === 'Monday'){
      return 9;
    }else if(day === 'Tuesday'){
      return 8;
    }else{
      return 9;
    }
  };
  
  const getActualSleepHours = () => {
    return (getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday'))
  
  }
  
  const getIdealSleepHours = () => {
    let idealHours = 7;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    if(actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep')
    }else if(actualSleepHours > idealSleepHours){
      console.log('You got sleep than needed. You over slept: '+ (actualSleepHours - idealSleepHours)+'hours')
    }else{
      console.log('You need some rest.')
    }
  }
  
  calculateSleepDebt();