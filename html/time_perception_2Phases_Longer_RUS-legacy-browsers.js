/******************************************* 
 * Time_Perception_2Phases_Longer_Rus Test *
 *******************************************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1), (- 1), (- 1)]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'time_perception_2Phases_Longer_RUS';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeScreenRoutineBegin());
flowScheduler.add(welcomeScreenRoutineEachFrame());
flowScheduler.add(welcomeScreenRoutineEnd());
const SecondPhaseLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(SecondPhaseLoopBegin, SecondPhaseLoopScheduler);
flowScheduler.add(SecondPhaseLoopScheduler);
flowScheduler.add(SecondPhaseLoopEnd);
flowScheduler.add(endScreenRoutineBegin());
flowScheduler.add(endScreenRoutineEachFrame());
flowScheduler.add(endScreenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var welcomeScreenClock;
var welcomeText;
var welcomeResp;
var Random_SequenceClock;
var firstIntervalClock;
var firstImg;
var blackScreen1Clock;
var blackImg1;
var secondIntervalClock;
var secondImg;
var blackScreen2Clock;
var blackImg2;
var responseScreenClock;
var responseImg;
var choice;
var blackScreen3Clock;
var responseText;
var responseRepeat;
var Time1;
var Time2;
var Seq;
var TimeDurationExp;
var StepsMAX;
var Steps;
var Bends;
var status;
var StepsCount;
var Experiment_Round;
var SecondPhase_WelcomeClock;
var TextSecond;
var text;
var key_resp;
var endScreenClock;
var endText;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "welcomeScreen"
  welcomeScreenClock = new util.Clock();
  welcomeText = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcomeText',
    text: "Здравствуйте! \n\nВаша задача сравнить длительности последовательно предъявляемых двух звездочек и указать какая из них была на экране больше времени:\n\nпервая (нажать клавишу 1) или вторая (нажать клавишу 2). \n\nВо время выполнения задания мы просим Вас отложить все другие дела и полагаться на Ваше внутреннее чувство времени, не пользоваться часами и не считать про себя. \n\nНажмите клавишу 'Пробел' для начала эксперимента.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.03,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  welcomeResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Random_Sequence"
  Random_SequenceClock = new util.Clock();
  // Initialize components for Routine "firstInterval"
  firstIntervalClock = new util.Clock();
  firstImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'firstImg', units : undefined, 
    image : 'img/stim.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [2, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "blackScreen1"
  blackScreen1Clock = new util.Clock();
  blackImg1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blackImg1', units : undefined, 
    image : 'img/black.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [2, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "secondInterval"
  secondIntervalClock = new util.Clock();
  secondImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'secondImg', units : undefined, 
    image : 'img/stim.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [2, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "blackScreen2"
  blackScreen2Clock = new util.Clock();
  blackImg2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'blackImg2', units : undefined, 
    image : 'img/black.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [2, 1],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "responseScreen"
  responseScreenClock = new util.Clock();
  responseImg = new visual.ImageStim({
    win : psychoJS.window,
    name : 'responseImg', units : undefined, 
    image : 'img\\resp_longer_rus.png', mask : undefined,
    ori : 0, pos : [0, 0], size : [1, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  choice = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blackScreen3"
  blackScreen3Clock = new util.Clock();
  responseText = new visual.TextStim({
    win: psychoJS.window,
    name: 'responseText',
    text: "Нажмите 'Пробел' для продолжения.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  responseRepeat = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Time1 = [5.6, 4.0];
  Time2 = [4.0, 5.6];
  Seq = 0;
  TimeDurationExp = (Time1[0] + Time2[0]);
  StepsMAX = 6;
  Steps = [0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4];
  Bends = [[], []];
  status = ["down", "up"];
  StepsCount = [0, 0];
  Experiment_Round = 1;
  
  // Initialize components for Routine "SecondPhase_Welcome"
  SecondPhase_WelcomeClock = new util.Clock();
  TextSecond = "";
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "endScreen"
  endScreenClock = new util.Clock();
  endText = new visual.TextStim({
    win: psychoJS.window,
    name: 'endText',
    text: 'Спасибо большое за участие!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _welcomeResp_allKeys;
var welcomeScreenComponents;
function welcomeScreenRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'welcomeScreen'-------
    t = 0;
    welcomeScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    welcomeResp.keys = undefined;
    welcomeResp.rt = undefined;
    _welcomeResp_allKeys = [];
    // keep track of which components have finished
    welcomeScreenComponents = [];
    welcomeScreenComponents.push(welcomeText);
    welcomeScreenComponents.push(welcomeResp);
    
    welcomeScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function welcomeScreenRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'welcomeScreen'-------
    // get current time
    t = welcomeScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcomeText* updates
    if (t >= 0.0 && welcomeText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcomeText.tStart = t;  // (not accounting for frame time here)
      welcomeText.frameNStart = frameN;  // exact frame index
      
      welcomeText.setAutoDraw(true);
    }

    
    // *welcomeResp* updates
    if (t >= 0.0 && welcomeResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcomeResp.tStart = t;  // (not accounting for frame time here)
      welcomeResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { welcomeResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { welcomeResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { welcomeResp.clearEvents(); });
    }

    if (welcomeResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = welcomeResp.getKeys({keyList: ['space'], waitRelease: false});
      _welcomeResp_allKeys = _welcomeResp_allKeys.concat(theseKeys);
      if (_welcomeResp_allKeys.length > 0) {
        welcomeResp.keys = _welcomeResp_allKeys[_welcomeResp_allKeys.length - 1].name;  // just the last key pressed
        welcomeResp.rt = _welcomeResp_allKeys[_welcomeResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcomeScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeScreenRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'welcomeScreen'-------
    welcomeScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('welcomeResp.keys', welcomeResp.keys);
    if (typeof welcomeResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('welcomeResp.rt', welcomeResp.rt);
        routineTimer.reset();
        }
    
    welcomeResp.stop();
    // the Routine "welcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var SecondPhase;
var currentLoop;
function SecondPhaseLoopBegin(SecondPhaseLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  SecondPhase = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1000, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'SecondPhase'
  });
  psychoJS.experiment.addLoop(SecondPhase); // add the loop to the experiment
  currentLoop = SecondPhase;  // we're now the current loop

  // Schedule all the trials in the trialList:
  SecondPhase.forEach(function() {
    const snapshot = SecondPhase.getSnapshot();

    SecondPhaseLoopScheduler.add(importConditions(snapshot));
    const time_durationsLoopScheduler = new Scheduler(psychoJS);
    SecondPhaseLoopScheduler.add(time_durationsLoopBegin, time_durationsLoopScheduler);
    SecondPhaseLoopScheduler.add(time_durationsLoopScheduler);
    SecondPhaseLoopScheduler.add(time_durationsLoopEnd);
    SecondPhaseLoopScheduler.add(SecondPhase_WelcomeRoutineBegin(snapshot));
    SecondPhaseLoopScheduler.add(SecondPhase_WelcomeRoutineEachFrame(snapshot));
    SecondPhaseLoopScheduler.add(SecondPhase_WelcomeRoutineEnd(snapshot));
    SecondPhaseLoopScheduler.add(endLoopIteration(SecondPhaseLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


var time_durations;
function time_durationsLoopBegin(time_durationsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  time_durations = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1000, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'time_durations'
  });
  psychoJS.experiment.addLoop(time_durations); // add the loop to the experiment
  currentLoop = time_durations;  // we're now the current loop

  // Schedule all the trials in the trialList:
  time_durations.forEach(function() {
    const snapshot = time_durations.getSnapshot();

    time_durationsLoopScheduler.add(importConditions(snapshot));
    time_durationsLoopScheduler.add(Random_SequenceRoutineBegin(snapshot));
    time_durationsLoopScheduler.add(Random_SequenceRoutineEachFrame(snapshot));
    time_durationsLoopScheduler.add(Random_SequenceRoutineEnd(snapshot));
    time_durationsLoopScheduler.add(firstIntervalRoutineBegin(snapshot));
    time_durationsLoopScheduler.add(firstIntervalRoutineEachFrame(snapshot));
    time_durationsLoopScheduler.add(firstIntervalRoutineEnd(snapshot));
    time_durationsLoopScheduler.add(blackScreen1RoutineBegin(snapshot));
    time_durationsLoopScheduler.add(blackScreen1RoutineEachFrame(snapshot));
    time_durationsLoopScheduler.add(blackScreen1RoutineEnd(snapshot));
    time_durationsLoopScheduler.add(secondIntervalRoutineBegin(snapshot));
    time_durationsLoopScheduler.add(secondIntervalRoutineEachFrame(snapshot));
    time_durationsLoopScheduler.add(secondIntervalRoutineEnd(snapshot));
    time_durationsLoopScheduler.add(blackScreen2RoutineBegin(snapshot));
    time_durationsLoopScheduler.add(blackScreen2RoutineEachFrame(snapshot));
    time_durationsLoopScheduler.add(blackScreen2RoutineEnd(snapshot));
    time_durationsLoopScheduler.add(responseScreenRoutineBegin(snapshot));
    time_durationsLoopScheduler.add(responseScreenRoutineEachFrame(snapshot));
    time_durationsLoopScheduler.add(responseScreenRoutineEnd(snapshot));
    time_durationsLoopScheduler.add(blackScreen3RoutineBegin(snapshot));
    time_durationsLoopScheduler.add(blackScreen3RoutineEachFrame(snapshot));
    time_durationsLoopScheduler.add(blackScreen3RoutineEnd(snapshot));
    time_durationsLoopScheduler.add(endLoopIteration(time_durationsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function time_durationsLoopEnd() {
  psychoJS.experiment.removeLoop(time_durations);

  return Scheduler.Event.NEXT;
}


function SecondPhaseLoopEnd() {
  psychoJS.experiment.removeLoop(SecondPhase);

  return Scheduler.Event.NEXT;
}


var Random_SequenceComponents;
function Random_SequenceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Random_Sequence'-------
    t = 0;
    Random_SequenceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((random() <= 0.5)) {
        Seq = 0;
    } else {
        Seq = 1;
    }
    
    // keep track of which components have finished
    Random_SequenceComponents = [];
    
    Random_SequenceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Random_SequenceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Random_Sequence'-------
    // get current time
    t = Random_SequenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Random_SequenceComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Random_SequenceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Random_Sequence'-------
    Random_SequenceComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Random_Sequence" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var firstIntervalComponents;
function firstIntervalRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'firstInterval'-------
    t = 0;
    firstIntervalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    firstIntervalComponents = [];
    firstIntervalComponents.push(firstImg);
    
    firstIntervalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function firstIntervalRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'firstInterval'-------
    // get current time
    t = firstIntervalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *firstImg* updates
    if (t >= 0.0 && firstImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      firstImg.tStart = t;  // (not accounting for frame time here)
      firstImg.frameNStart = frameN;  // exact frame index
      
      firstImg.setAutoDraw(true);
    }

    frameRemains = 0.0 + Time1[Seq] - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (firstImg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      firstImg.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    firstIntervalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function firstIntervalRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'firstInterval'-------
    firstIntervalComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "firstInterval" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blackScreen1Components;
function blackScreen1RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blackScreen1'-------
    t = 0;
    blackScreen1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.900000);
    // update component parameters for each repeat
    // keep track of which components have finished
    blackScreen1Components = [];
    blackScreen1Components.push(blackImg1);
    
    blackScreen1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blackScreen1RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blackScreen1'-------
    // get current time
    t = blackScreen1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blackImg1* updates
    if (t >= 0.0 && blackImg1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blackImg1.tStart = t;  // (not accounting for frame time here)
      blackImg1.frameNStart = frameN;  // exact frame index
      
      blackImg1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blackImg1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blackImg1.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    blackScreen1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blackScreen1RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blackScreen1'-------
    blackScreen1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var secondIntervalComponents;
function secondIntervalRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'secondInterval'-------
    t = 0;
    secondIntervalClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    secondIntervalComponents = [];
    secondIntervalComponents.push(secondImg);
    
    secondIntervalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function secondIntervalRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'secondInterval'-------
    // get current time
    t = secondIntervalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *secondImg* updates
    if (t >= 0.0 && secondImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      secondImg.tStart = t;  // (not accounting for frame time here)
      secondImg.frameNStart = frameN;  // exact frame index
      
      secondImg.setAutoDraw(true);
    }

    frameRemains = 0.0 + Time2[Seq] - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (secondImg.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      secondImg.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    secondIntervalComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function secondIntervalRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'secondInterval'-------
    secondIntervalComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "secondInterval" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blackScreen2Components;
function blackScreen2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blackScreen2'-------
    t = 0;
    blackScreen2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.900000);
    // update component parameters for each repeat
    // keep track of which components have finished
    blackScreen2Components = [];
    blackScreen2Components.push(blackImg2);
    
    blackScreen2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blackScreen2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blackScreen2'-------
    // get current time
    t = blackScreen2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *blackImg2* updates
    if (t >= 0.0 && blackImg2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blackImg2.tStart = t;  // (not accounting for frame time here)
      blackImg2.frameNStart = frameN;  // exact frame index
      
      blackImg2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blackImg2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blackImg2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    blackScreen2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blackScreen2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blackScreen2'-------
    blackScreen2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var _choice_allKeys;
var responseScreenComponents;
function responseScreenRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'responseScreen'-------
    t = 0;
    responseScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    choice.keys = undefined;
    choice.rt = undefined;
    _choice_allKeys = [];
    // keep track of which components have finished
    responseScreenComponents = [];
    responseScreenComponents.push(responseImg);
    responseScreenComponents.push(choice);
    
    responseScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function responseScreenRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'responseScreen'-------
    // get current time
    t = responseScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *responseImg* updates
    if (t >= 0.0 && responseImg.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      responseImg.tStart = t;  // (not accounting for frame time here)
      responseImg.frameNStart = frameN;  // exact frame index
      
      responseImg.setAutoDraw(true);
    }

    
    // *choice* updates
    if (t >= 0.0 && choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      choice.tStart = t;  // (not accounting for frame time here)
      choice.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { choice.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { choice.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { choice.clearEvents(); });
    }

    if (choice.status === PsychoJS.Status.STARTED) {
      let theseKeys = choice.getKeys({keyList: ['1', '2'], waitRelease: false});
      _choice_allKeys = _choice_allKeys.concat(theseKeys);
      if (_choice_allKeys.length > 0) {
        choice.keys = _choice_allKeys[_choice_allKeys.length - 1].name;  // just the last key pressed
        choice.rt = _choice_allKeys[_choice_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    responseScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function responseScreenRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'responseScreen'-------
    responseScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('choice.keys', choice.keys);
    if (typeof choice.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('choice.rt', choice.rt);
        routineTimer.reset();
        }
    
    choice.stop();
    // the Routine "responseScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _responseRepeat_allKeys;
var blackScreen3Components;
function blackScreen3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'blackScreen3'-------
    t = 0;
    blackScreen3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    responseRepeat.keys = undefined;
    responseRepeat.rt = undefined;
    _responseRepeat_allKeys = [];
    // keep track of which components have finished
    blackScreen3Components = [];
    blackScreen3Components.push(responseText);
    blackScreen3Components.push(responseRepeat);
    
    blackScreen3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blackScreen3RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'blackScreen3'-------
    // get current time
    t = blackScreen3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *responseText* updates
    if (t >= 0.0 && responseText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      responseText.tStart = t;  // (not accounting for frame time here)
      responseText.frameNStart = frameN;  // exact frame index
      
      responseText.setAutoDraw(true);
    }

    
    // *responseRepeat* updates
    if (t >= 0.0 && responseRepeat.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      responseRepeat.tStart = t;  // (not accounting for frame time here)
      responseRepeat.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { responseRepeat.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { responseRepeat.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { responseRepeat.clearEvents(); });
    }

    if (responseRepeat.status === PsychoJS.Status.STARTED) {
      let theseKeys = responseRepeat.getKeys({keyList: ['space'], waitRelease: false});
      _responseRepeat_allKeys = _responseRepeat_allKeys.concat(theseKeys);
      if (_responseRepeat_allKeys.length > 0) {
        responseRepeat.keys = _responseRepeat_allKeys[_responseRepeat_allKeys.length - 1].name;  // just the last key pressed
        responseRepeat.rt = _responseRepeat_allKeys[_responseRepeat_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    blackScreen3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var mean1;
var mean2;
var meanBoth;
var SecondStart;
function blackScreen3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'blackScreen3'-------
    blackScreen3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('responseRepeat.keys', responseRepeat.keys);
    if (typeof responseRepeat.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('responseRepeat.rt', responseRepeat.rt);
        routineTimer.reset();
        }
    
    responseRepeat.stop();
    thisExp.addData("t1", Time1[Seq]);
    thisExp.addData("t2", Time2[Seq]);
    if ((Seq === 0)) {
        thisExp.addData("sequence", 56);
    }
    if ((Seq === 1)) {
        thisExp.addData("sequence", 40);
    }
    thisExp.addData("Step56", StepsCount[0]);
    thisExp.addData("Step40", StepsCount[1]);
    if (((choice.keys === "1") && (status[Seq] === "down"))) {
        Time1[Seq] -= Steps[StepsCount[Seq]];
        Time2[Seq] += Steps[StepsCount[Seq]];
    } else {
        if (((choice.keys === "1") && (status[Seq] === "up"))) {
            Time1[Seq] -= Steps[StepsCount[Seq]];
            Time2[Seq] += Steps[StepsCount[Seq]];
            status[Seq] = "down";
            if ((StepsCount[Seq] > 2)) {
                Bends[Seq].append(Time1[Seq]);
            }
            StepsCount[Seq] += 1;
        }
    }
    if (((choice.keys === "2") && (status[Seq] === "down"))) {
        Time1[Seq] += Steps[StepsCount[Seq]];
        Time2[Seq] -= Steps[StepsCount[Seq]];
        status[Seq] = "up";
        if ((StepsCount[Seq] > 2)) {
            Bends[Seq].append(Time1[Seq]);
        }
        StepsCount[Seq] += 1;
    } else {
        if (((choice.keys === "2") && (status[Seq] === "up"))) {
            Time1[Seq] += Steps[StepsCount[Seq]];
            Time2[Seq] -= Steps[StepsCount[Seq]];
        }
    }
    if (((StepsCount[0] >= StepsMAX) && (StepsCount[1] >= StepsMAX))) {
        mean1 = round(np.array(Bends[0]).mean(), 1);
        mean2 = round(np.array(Bends[1]).mean(), 1);
        meanBoth = round(((mean1 + mean2) / 2), 1);
        thisExp.addData("MeanSeq1", mean1);
        thisExp.addData("MeanSeq2", mean2);
        thisExp.addData("MeanBoth", meanBoth);
        SecondStart = (TimeDurationExp - meanBoth);
        Time1 = [(meanBoth + 0.8), (SecondStart - 0.8)];
        Time2 = [(meanBoth - 0.8), (SecondStart + 0.8)];
        thisExp.addData("NewTime1_start", Time1[0]);
        thisExp.addData("NewTime1_end", Time1[1]);
        thisExp.addData("NewTime2_start", Time2[0]);
        thisExp.addData("NewTime2_end", Time2[1]);
        if ((Experiment_Round <= 1)) {
            Experiment_Round = 2;
            StepsCount = [0, 0];
            Bends = [[], []];
            status = ["down", "up"];
            time_durations.finished = true;
        } else {
            Experiment_Round = 3;
            SecondPhase.finished = true;
            time_durations.finished = true;
        }
    }
    
    // the Routine "blackScreen3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var SecondPhase_WelcomeComponents;
function SecondPhase_WelcomeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'SecondPhase_Welcome'-------
    t = 0;
    SecondPhase_WelcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if ((Experiment_Round <= 2)) {
        TextSecond = "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u043b\u0430\u0441\u044c \u043f\u0435\u0440\u0432\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0430.\n\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u043e\u0439\u0442\u0438 \u0432\u0442\u043e\u0440\u0443\u044e \u0447\u0430\u0441\u0442\u044c.\n\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 '\u041f\u0440\u043e\u0431\u0435\u043b' \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430.";
    } else {
        TextSecond = "\u0412\u0430\u0448 \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d! \n\n\u041d\u0430\u0436\u043c\u0438\u0442\u0435, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043a\u043b\u0430\u0432\u0438\u0448\u0443 '\u041f\u0440\u043e\u0431\u0435\u043b'.";
    }
    
    text.setText(TextSecond);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    SecondPhase_WelcomeComponents = [];
    SecondPhase_WelcomeComponents.push(text);
    SecondPhase_WelcomeComponents.push(key_resp);
    
    SecondPhase_WelcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function SecondPhase_WelcomeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'SecondPhase_Welcome'-------
    // get current time
    t = SecondPhase_WelcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    SecondPhase_WelcomeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function SecondPhase_WelcomeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'SecondPhase_Welcome'-------
    SecondPhase_WelcomeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "SecondPhase_Welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var endScreenComponents;
function endScreenRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'endScreen'-------
    t = 0;
    endScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    endScreenComponents = [];
    endScreenComponents.push(endText);
    
    endScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function endScreenRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'endScreen'-------
    // get current time
    t = endScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *endText* updates
    if (t >= 0.0 && endText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endText.tStart = t;  // (not accounting for frame time here)
      endText.frameNStart = frameN;  // exact frame index
      
      endText.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (endText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      endText.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    endScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endScreenRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'endScreen'-------
    endScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
