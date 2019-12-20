import {WeekDay} from '@angular/common';

export class Activity {
  name: string;
  image: string;
  show = true;

  constructor(name: string, image: string, show?: boolean) {
    this.name = name;
    this.image = image;
    if (show != null) {
      this.show = show;
    }
  }

  dontShow() {
    this.show = false;
  }
}


export const activities = new Map<string, Activity>([
  ['1', new Activity('Jogging', '', false)],
  ['2', new Activity('Cycling', '', false)],
  ['3', new Activity('Others', '', false)],
  ['9', new Activity('Aerobics', '../../../assets/fitness-activities/aerobics.svg')],
  ['119', new Activity('Archery', '../../../assets/fitness-activities/archery.jpg')],
  ['10', new Activity('Badminton', '../../../assets/fitness-activities/badminton.jpg')],
  ['11', new Activity('Baseball', '../../../assets/fitness-activities/baseball.jpeg')],
  ['12', new Activity('Basketball', '../../../assets/fitness-activities/basketball.svg')],
  // ['13', new Activity('Biathlon', '../../../assets/fitness-activities/biathlon.jpg')],
  ['4', new Activity('Handbiking', '../../../assets/fitness-activities/biking.jpg')],
  ['4', new Activity('Mountain biking', '../../../assets/fitness-activities/mountain biking.jpg')],
  ['4', new Activity('Road biking', '../../../assets/fitness-activities/road biking.jpg')],
  // ['17', new Activity('Spinning', '../../../assets/fitness-activities/spinning.jpg')],
  // ['18', new Activity('Stationary biking', '../../../assets/fitness-activities/stationary biking.jpg')],
  ['20', new Activity('Boxing', '../../../assets/fitness-activities/boxing.jpg')],
  ['21', new Activity('Calisthenics', '../../../assets/fitness-activities/calisthenics.jpg')],
  ['23', new Activity('Cricket', '../../../assets/fitness-activities/cricket.jpg')],
  ['113', new Activity('Crossfit', '../../../assets/fitness-activities/crossfit.webp')],
  ['24', new Activity('Dancing', '../../../assets/fitness-activities/dancing.jpg')],
  ['102', new Activity('Diving', '../../../assets/fitness-activities/diving.jpeg')],
  ['117', new Activity('Elevator', '../../../assets/fitness-activities/elevator.jpg')],
  ['25', new Activity('Elliptical', '../../../assets/fitness-activities/elliptical.jpg')],
  ['103', new Activity('Ergometer', '../../../assets/fitness-activities/ergometer.jpg')],
  ['118', new Activity('Escalator', '../../../assets/fitness-activities/escalator.png')],
  ['26', new Activity('Fencing', '../../../assets/fitness-activities/fencing.jpg')],
  ['27', new Activity('Football (American)', '../../../assets/fitness-activities/football (american).jpg')],
  ['29', new Activity('Football (Soccer)', '../../../assets/fitness-activities/football (soccer).svg')],
  ['30', new Activity('Frisbee', '../../../assets/fitness-activities/frisbee.jpg')],
  ['31', new Activity('Gardening', '../../../assets/fitness-activities/gardening.svg')],
  ['32', new Activity('Golf', '../../../assets/fitness-activities/golf.svg')],
  ['122', new Activity('Guided Breathing', '../../../assets/fitness-activities/guided breathing.svg')],
  ['33', new Activity('Gymnastics', '../../../assets/fitness-activities/gymnastics.webp')],
  ['34', new Activity('Handball', '../../../assets/fitness-activities/handball.jpg')],
  ['114', new Activity('HIIT', '../../../assets/fitness-activities/hiit.jpg')],
  ['35', new Activity('Hiking', '../../../assets/fitness-activities/hiking.svg')],
  ['36', new Activity('Hockey', '../../../assets/fitness-activities/hockey.jpg')],
  ['37', new Activity('Horseback riding', '../../../assets/fitness-activities/horseback riding.svg')],
  ['38', new Activity('Housework', '../../../assets/fitness-activities/housework.jpg')],
  ['104', new Activity('Ice skating', '../../../assets/fitness-activities/ice skating.jpg')],
  ['0', new Activity('In vehicle*', '../../../assets/fitness-activities/in vehicle*.svg')],
  // ['115', new Activity('Interval Training', '../../../assets/fitness-activities/interval training.jpg')],
  ['39', new Activity('Jumping rope', '../../../assets/fitness-activities/jumping rope.png')],
  ['40', new Activity('Kayaking', '../../../assets/fitness-activities/kayaking.jpg')],
  ['41', new Activity('Kettlebell training', '../../../assets/fitness-activities/kettlebell training.png')],
  ['42', new Activity('Kickboxing', '../../../assets/fitness-activities/kickboxing.jpg')],
  ['43', new Activity('Kitesurfing', '../../../assets/fitness-activities/kitesurfing.webp')],
  ['44', new Activity('Martial arts', '../../../assets/fitness-activities/martial arts.jpg')],
  ['45', new Activity('Meditation', '../../../assets/fitness-activities/meditation.svg')],
  ['46', new Activity('Mixed martial arts', '../../../assets/fitness-activities/mixed martial arts.jpg')],
  // ['1', new Activity('On foot*', '../../../assets/fitness-activities/on foot*.svg')],
  ['108', new Activity('Other (unclassified fitness activity)',
    '../../../assets/fitness-activities/other (unclassified fitness activity).svg')],
  ['47', new Activity('P90X exercises', '../../../assets/fitness-activities/p90x exercises.webp')],
  ['48', new Activity('Paragliding', '../../../assets/fitness-activities/paragliding.webp')],
  ['49', new Activity('Pilates', '../../../assets/fitness-activities/pilates.svg')],
  ['50', new Activity('Polo', '../../../assets/fitness-activities/polo.webp')],
  ['51', new Activity('Racquetball', '../../../assets/fitness-activities/racquetball.webp')],
  ['52', new Activity('Rock climbing', '../../../assets/fitness-activities/rock climbing.jpg')],
  ['53', new Activity('Rowing', '../../../assets/fitness-activities/rowing.jpg')],
  ['54', new Activity('Rowing machine', '../../../assets/fitness-activities/ergometer.jpg')],
  ['55', new Activity('Rugby', '../../../assets/fitness-activities/football (american).jpg')],
  ['8', new Activity('Running*', '../../../assets/fitness-activities/jogging.png')],
  ['56', new Activity('Jogging', '../../../assets/fitness-activities/jogging.png')],
  ['57', new Activity('Running on sand', '../../../assets/fitness-activities/jogging.png')],
  ['58', new Activity('Running (treadmill)', '../../../assets/fitness-activities/running (treadmill).png')],
  ['59', new Activity('Sailing', '../../../assets/fitness-activities/sailing.jpg')],
  ['60', new Activity('Scuba diving', '../../../assets/fitness-activities/scuba diving.webp')],
  ['61', new Activity('Skateboarding', '../../../assets/fitness-activities/skateboarding.jpg')],
  // ['62', new Activity('Skating', '../../../assets/fitness-activities/skating.webp')],
  // ['63', new Activity('Cross skating', '../../../assets/fitness-activities/skating.webp')],
  // ['105', new Activity('Indoor skating', '../../../assets/fitness-activities/skating.webp')],
  // ['64', new Activity('Inline skating (rollerblading)', '../../../assets/fitness-activities/skating.webp')],
  // ['65', new Activity('Skiing', '../../../assets/fitness-activities/skiing.jpg')],
  // ['66', new Activity('Back-country skiing', '../../../assets/fitness-activities/skiing.jpg')],
  // ['67', new Activity('Cross-country skiing', '../../../assets/fitness-activities/skiing.jpg')],
  // ['68', new Activity('Downhill skiing', '../../../assets/fitness-activities/skiing.jpg')],
  // ['69', new Activity('Kite skiing', '../../../assets/fitness-activities/skiing.jpg')],
  // ['70', new Activity('Roller skiing', '../../../assets/fitness-activities/skiing.jpg')],
  ['71', new Activity('Sledding', '../../../assets/fitness-activities/sledding.jpg')],
  ['72', new Activity('Sleeping', '../../../assets/fitness-activities/sleeping.svg')],
  ['109', new Activity('Light sleep', '../../../assets/fitness-activities/sleeping.svg')],
  ['110', new Activity('Deep sleep', '../../../assets/fitness-activities/sleeping.svg')],
  ['111', new Activity('REM sleep', '../../../assets/fitness-activities/sleeping.svg')],
  ['112', new Activity('Awake (during sleep cycle)', '../../../assets/fitness-activities/awake (during sleep cycle).svg')],
  ['73', new Activity('Snowboarding', '../../../assets/fitness-activities/snowboarding.svg')],
  ['74', new Activity('Snowmobile', '../../../assets/fitness-activities/snowmobile.jpg')],
  ['75', new Activity('Snowshoeing', '../../../assets/fitness-activities/snowshoeing.jpg')],
  ['120', new Activity('Softball', '../../../assets/fitness-activities/softball.jpg')],
  ['76', new Activity('Squash', '../../../assets/fitness-activities/racquetball.webp')],
  ['77', new Activity('Stair climbing', '../../../assets/fitness-activities/stair climbing.webp')],
  ['78', new Activity('Stair-climbing machine', '../../../assets/fitness-activities/stair-climbing machine.svg')],
  ['79', new Activity('Stand-up paddleboarding', '../../../assets/fitness-activities/stand-up paddleboarding.webp')],
  ['3', new Activity('Still (not moving)*', '../../../assets/fitness-activities/still (not moving)*.svg')],
  ['80', new Activity('Strength training', '../../../assets/fitness-activities/strength training.jpg')],
  ['81', new Activity('Surfing', '../../../assets/fitness-activities/surfing.svg')],
  // ['82', new Activity('Swimming', '../../../assets/fitness-activities/swimming.jpg')],
  // ['84', new Activity('Swimming (open water)', '../../../assets/fitness-activities/swimming.jpg')],
  // ['83', new Activity('Swimming (swimming pool)', '../../../assets/fitness-activities/swimming.jpg')],
  ['85', new Activity('Table tennis (ping pong)', '../../../assets/fitness-activities/table tennis (ping pong).webp')],
  ['86', new Activity('Team sports', '../../../assets/fitness-activities/team sports.svg')],
  ['87', new Activity('Tennis', '../../../assets/fitness-activities/tennis.svg')],
  ['5', new Activity('Tilting (sudden device gravity change)*',
    '../../../assets/fitness-activities/tilting (sudden device gravity change)*.svg')],
  // ['1', new Activity('Treadmill (walking or running)', '../../../assets/fitness-activities/running (treadmill).png')],
  ['4', new Activity('Unknown (unable to detect activity)*',
    '../../../assets/fitness-activities/unknown (unable to detect activity)*.svg')],
  ['89', new Activity('Volleyball', '../../../assets/fitness-activities/volleyball.jpg')],
  ['90', new Activity('Volleyball (beach)', '../../../assets/fitness-activities/volleyball.jpg')],
  ['91', new Activity('Volleyball (indoor)', '../../../assets/fitness-activities/volleyball.jpg')],
  ['92', new Activity('Wakeboarding', '../../../assets/fitness-activities/wakeboarding.jpg')],
  ['7', new Activity('Walking*', '../../../assets/fitness-activities/walking.svg')],
  ['93', new Activity('Walking (fitness)', '../../../assets/fitness-activities/walking.svg')],
  ['94', new Activity('Nording walking', '../../../assets/fitness-activities/walking.svg')],
  ['95', new Activity('Walking (treadmill)', '../../../assets/fitness-activities/running (treadmill).png')],
  ['116', new Activity('Walking (stroller)', '../../../assets/fitness-activities/stroller.jpg')],
  ['96', new Activity('Waterpolo', '../../../assets/fitness-activities/waterpolo.svg')],
  ['97', new Activity('Weightlifting', '../../../assets/fitness-activities/weightlifting.webp')],
  ['98', new Activity('Wheelchair', '../../../assets/fitness-activities/wheelchair.svg')],
  ['99', new Activity('Windsurfing', '../../../assets/fitness-activities/windsurfing.svg')],
  ['100', new Activity('Yoga', '../../../assets/fitness-activities/yoga.svg')],
  ['101', new Activity('Zumba', '../../../assets/fitness-activities/zumba.svg')],

]);

export const week = [
  {value: WeekDay.Monday, display: 'Monday'},
  {value: WeekDay.Tuesday, display: 'Tuesday'},
  {value: WeekDay.Wednesday, display: 'Wednesday'},
  {value: WeekDay.Thursday, display: 'Thursday'},
  {value: WeekDay.Friday, display: 'Friday'},
  {value: WeekDay.Saturday, display: 'Saturday'},
  {value: WeekDay.Sunday, display: 'Sunday'}
];

export class BasicInfo {
  userId: string;
  email: string;
  height: number;
  weight: number;
  age: string;
  gender: string;

  constructor(email: string, height: number, weight: number, age: string, gender: string) {
    this.age = age;
    this.email = email;
    this.height = height;
    this.weight = weight;
    this.gender = gender;
  }
}

export class FreakInfo {
  userId: string;
  activityType: string;
  rating: number;
  timeSpent: number;
  frequencyInfo: FrequencyInfo;
}

export class FrequencyInfo {
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
}


