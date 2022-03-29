PennController.ResetPrefix(null); // Shorten command names (keep this line here)

number_of_experiment=6;

number_of_experiment_as_string=number_of_experiment.toString();

var screen_width;

var device_name;

var mobile_device_based_on_screen_width;

var mobile_device_based_on_device_name;

var ii=0;
experiment_path="https://ibexfarm.ung.si/uporabniki/dk0035/experiment"+number_of_experiment_as_string+'_test'+'/';

var Question_asked = "Моля, довършете изречението, като поставите последната дума в подходящата форма чрез натискане с мишката върху съответната форма:";

//experiment_path
stimuli_path=experiment_path+'stimuli/';
zip_folder_path=stimuli_path+'zip_folder/';
zip_file_path=zip_folder_path+'zipped_stimuli_mono.zip';
    
var type_of_experiment ="test-short";
//var type_of_experiment ="test-full";
    
//var type_of_experiment ="pilot";
//var type_of_experiment ="main";

var progressBarText = "прогрес";
var stimuli_csv_table="design_final.csv";
//Template("test_csv"
var message_for_the_type_of_experiment = "";

//var word = " ";
//var word_index=0;

if (type_of_experiment=="pilot")
{
  message_for_the_type_of_experiment = "Пилотен проект на експеримент "+number_of_experiment_as_string;
  stimuli_csv_table="design_final.csv";
  results_path=experiment_path+'pilot/';

}
else if (type_of_experiment=="test-short")
{
  message_for_the_type_of_experiment = "Кратък тест на експеримент "+number_of_experiment_as_string;
  stimuli_csv_table="test.csv";   
  results_path=experiment_path+'short_test/';

}

else if (type_of_experiment=="test-full")
{
  message_for_the_type_of_experiment = "Пълен тест на експеримент "+number_of_experiment_as_string;
  stimuli_csv_table="design_final.csv";
  results_path=experiment_path+'long_test/';

}


else
{
  message_for_the_type_of_experiment = "Експеримент "+number_of_experiment_as_string;
  stimuli_csv_table="design_final.csv";
  results_path=experiment_path+'main_experiment/';

    
}

results_path=results_path;

////php_file_path="https://vecjezicnost.ung.si/BGexp1/mediarec.php;
//php_file_path=results_path+'mediarec.php';


//var item_index = 0;
var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c=>{
  const r = Math.random() * 16 | 0,v = c == 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
});
Header(
  // void
)
.log("uniqueID", id);
/*
    dashed = (sentence, remove,question) => {
    //console.log('Hello, World!');
    let words = sentence.split(' '),  blanks = words.map(w=>w.split('').map(c=>'_').join('') );
    let textName = 'dashed'+words.join('');
    // We'll return cmds: the first command consists in creating (and printing) a Text element with dashes
    //let cmds = [newText(textName, blanks.join(' ')).print() .settings.css("font-family","times new roman")]; // times new roman as font
    let cmds = [newText(textName, blanks.join(' ')).css("line-height","1.4").css("padding-top","5%").center().print()]; // times new roman as font
    // We'll go through each word, and add two command blocks per word
    for (let i = 0; i <= words.length; i++)
    {
    var word = words[i+1];
    //var word_index=i+1;
    //cmds = cmds.concat([newVar("word",words[i+1]),newVar("word_index",words[i+1]) ,
    cmds = cmds.concat([newKey('dashed'+'-'+words[i]+'-'+(i+1).toString(), " ").log().wait() , // Wait for (and log) a press on Space
    getText(textName).text(blanks.map((w,n)=>(n==i?words[n]:w)).join(' ')) ]); // Show word
    }
    if (remove)  // Remove the text after the last key.wait() is parameter specified
    cmds.push(getText(textName).remove());
    if (question!="")
    {
      cmds.push()  
    }
    else if (question=="")
    {}
    
    return cmds;
}
*/


///////AddHost("http://sabotin.ung.si/~astepanov/SLO_COMP_audio/")
///////AddHost("http://sabotin.ung.si/~astepanov/ru_wh_pictures/")

///////AddHost("https://sabotin.ung.si/~dk0035/");
///////AddHost("https://ibexfarm.ung.si/uporabniki/dk0035/private/experiment2/stimuli/")
//AddHost(stimuli_path)



//////////PreloadZip("https://sabotin.ung.si/~dk0035/zipped_stimuli_mono.zip")
//////////PreloadZip(zip_file_path)

    

//Sequence("finished");
Sequence("mobile_device_check","intro1",  "demo", "trials",  "demo1",  "demo2", "expbegin", randomize("experiment"), "Sync", SendResults(), "bye");

//Sequence("mobile_device_check","intro1", "trials",  "demo1",  "demo2", "expbegin", randomize("experiment"), SendResults(), "bye");
//Sequence("trials",  "demo1",  "demo2")
//("intro1");
//Sequence("intro1","expbegin")
//Sequence("expbegin", randomize("experiment"), SendResults(), "bye");

////Sequence("intro", "intro1", "trials",  "demo1",  "demo2", "expbegin", sepWith("sendAsync", randomize("experiment")), "Sync", SendResults(), "bye")


////Sequence("expbegin", sepWith("sendAsync", randomize("experiment")));


//Sequence("intro", "intro1", "intro2", "trials", "demo1",  "demo2","Sync", SendResults(), "bye")
////("intro", "trials")

////Sequence("intro", "intro1", "demo",  "trials", "demo1",  "demo2","expbegin", sepWith("sendAsync", randomize("experiment")) ok
/////Sequence("intro", "intro1", "trials","demo1",  "demo2","expbegin", sepWith("sendAsync", randomize("experiment")))
///Sequence("intro", "intro1", "trials","preload_demo_label","preload_demo" , startsWith("demo1","demo2"),  "demo1",  "demo2","preload_trials_label","preload_trials",startsWith("experiment"), "expbegin", sepWith("sendAsync", randomize("experiment")), "Sync", SendResults(), "bye");


////////Sequence("intro", "intro1", "trials","preload_demo_label")
/////////InitiateRecorder("https://vecjezicnost.ung.si/media_rec/mediarec.php", "")
    
/////////InitiateRecorder("https://vecjezicnost.ung.si/BGexp1/mediarec.php", "Моля, регулирайте настройките на своя браузър, за да разрешите достъп до микрофона. След това натиснете връзката по-долу.")
/////////InitiateRecorder("http://sabotin.ung.si/~dk0035/tests", "Това е само тест. Не използвайте това при реалния експеримент, защото резултатите НЯМА да бъдат изпратени към сървъра.")


    
/////////InitiateRecorder("https://ibexfarm.ung.si/uporabniki/dk0035/experiment2/short_test_results/mediarec.php", "Това е тест на новата ситемата. Не използвайте това при реалния експеримент, защото резултатите НЯМА да бъдат изпратени към сървъра.")
/////////InitiateRecorder("https://ibexfarm.ung.si/uporabniki/dk0035/experiment2/short_test_results/mediarec.php", "Това е тест на новата ситемата. Не използвайте това при реалния експеримент, защото резултатите НЯМА да бъдат изпратени към сървъра.")

 //InitiateRecorder(php_file_path, "Това е тест на новата ситема, който има за цел да определи дали резулттатите се записват в съответната .php директория")
 //InitiateRecorder(php_file_path, "Моля, регулирайте настройките на своя браузър, за да разрешите достъп до микрофона. След това натиснете връзката по-долу.")


    //.label("intro");

//UploadRecordings("sendAsync", "noblock");
//UploadRecordings("Sync");

    //let replaceConsentMic = ()=>{
            //let consentLink = $(".PennController-PennController a.Message-continue-link");
            //if (consentLink.length > 0 && consentLink[0].innerHTML.match(/^By clicking this link I understand that I grant this experiment's script access to my recording device/))
                //consentLink.html("Давам съгласието си за използване на микрофона и за записване на гласа ми в този експеримент. ");
            //else
                //window.requestAnimationFrame( replaceConsentMic );
    //};
    //window.requestAnimationFrame( replaceConsentMic );



newTrial( "finished",
   exitFullscreen()
   ,
   newText("Благодарим Ви за интереса. Този експеримент приключи.")
       .css("width","40em")
       .css("padding-top","10%")
       .css("line-height","1.4")
       .print()
    
    ,

   newText("Това беше линкът към пилотния проект на експеримент 5. В момента се провежда основната версия експеримент 5. За да участвате в основната версия на експеримент 5, посетете линка "+"<a href=https://expt.pcibex.net/ibexexps/danilchr/experiment5_main_old_pc_ibex_final/experiment.html>https://expt.pcibex.net/ibexexps/danilchr/experiment5_main_old_pc_ibex_final/experiment.html</a>"+", като натиснете върху него или като го копирате в своя браузър.")
       //.css("width","40em")
       //.css("padding-top","10%")
       //.css("line-height","1.4")
       //.print()
       
        //,

   //newText("В момента има проблем със сървъра. Моля, върнете се към ексеперимента след 18 май. Благодаря.")
       //.css("width","40em")
       //.css("padding-top","10%")
       //.css("line-height","1.4")
       //.print()
    ,
    newButton("")
        //.print()
        .wait()
        
       )
       ,

       


newTrial("mobile_device_check",

    newText("Проверка на устройството")
        .css("width","40em")
        .css("padding-top","10%")
        .css("line-height","1.4")
        //.print()
            ,
   screen_width=screen.width
   ,
   device_name=navigator.userAgent
   ,
   
   (window.matchMedia("(max-width: 767px)").matches?
   [mobile_device_based_on_screen_width="mobile_device"
   ]
   :
   [mobile_device_based_on_screen_width="desktop_device"]
   )
   ,
   
   
   (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)?
   [mobile_device_based_on_device_name="mobile_device"
   ]
   :
   [mobile_device_based_on_device_name="desktop_device"
   ]
   )
   ,
   (mobile_device_based_on_screen_width=="mobile_device" ?
   [
       (mobile_device_based_on_device_name=="mobile_device" ?
        [
        newText("Вие изпозвате мобилно устройство с прекалено малка широчина на екрана. Моля, не използвайте мобилно устойство, когато правите експеримента.")
            .css("width","40em")
            .css("padding-top","10%")
            .css("line-height","1.4")
            .print()
        ,
        newButton("")
            //.print()
            .wait()
       ]
        :
        [
       newText("Вие изпозвате устройство с прекалено малка широчина на екрана. Моля, не използвайте мобилно устойство, когато правите експеримента.")
        .css("width","40em")
        .css("padding-top","10%")
        .css("line-height","1.4")
        .print()
        ,
        newButton("")
            //.print()
            .wait()

       ]
        )
   ]
   :
   [
       (mobile_device_based_on_device_name=="mobile_device" ?
        [
        newText("Вие изпозвате мобилно устройство. Моля, не използвайте мобилно устойство, когато правите експеримента.")
            .css("width","40em")
            .css("padding-top","10%")
            .css("line-height","1.4")
            .print()
        ,
        newButton("")
            //.print()
            .wait()

        ]
        :
        [
        newButton("continue", "Продължете нататък")
            .color("red")
            .center()
            .print()
            .wait()
            .log()
            ,
        ]
        )
    ] 
       
    )
)
,

newTrial("intro1",

    newText(message_for_the_type_of_experiment)
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .center()
    .print()
    ,
     
     //newText(experiment_path+'\n'+stimuli_path+'\n'+results_path+'\n'+php_file_path+'\n'+zip_folder_path+'\n'+zip_file_path)
    //.css("width","40em")
    //.css("line-height","1.4")
    ////.css("padding-top","40px")
    //.css("padding-bottom","20px")
    //.center()
    //.print()
    //,

    newText("Здравейте! В рамките на изследователски проект в Университета в Нова Горица, Словения и Университета в Женева, Швейцария изследваме как носителите на езика обработват изречения с различна дължина и сложност.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()

    ,

    newText("Експериментът отнема между 15 и 20 минути. Предоставените от Вас данни ще бъдат използвани само за целите на това научно изследване и няма да бъдат разпространявани неправомерно.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    ,
        
    
    newText("Ще ви бъдат представени писмено недовършени изречения, във всяко от които думите се появяват една след друга. Вашата задача е да  довършите изреченията, като поставите последната дума в подходящата форма. Ще видите всяко изречение само веднъж и няма да можете да се върнете назад.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    ,

    newText("Моля, използвайте формите, които звучат най-добре за Вас, когато завършвате изреченията. Следвайте интуицията си, без да обмисляте отговора си при изпълнението на задачата и без да използвате помощ от други източници.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    ,
  
      newButton("continue_to_questionaire", "Продължете нататък")
       .color("red")
       .center()
       .print()
        .wait()
        .log()
    
 
   
  ).setOption("hideProgressBar",true)

,

    
newTrial("demo",


    newHtml("demographics", "ru_wh_demo.html")
    .css("padding-top","10%")
    .css("line-height","1.4")
    .checkboxWarning("Моля, изберете една от възможностите.")
    .inputWarning("Моля, попълнете това поле.")
    .radioWarning("Моля, изберете една от възможностите.")
        .settings.log()
        .log("uniqueID", id)
        .print()
            
            

    ,
     newButton("continue_to_examples", "Продължете нататък")
       .color("red")
       .center()
       .print()
       .wait(
           getHtml("demographics").test.complete()
              .failure( getHtml("demographics").warn() )
           )
        .log()
       ).setOption("hideProgressBar",true)
    ,
    
  

         
        

newTrial ("trials",
    


    newText("Ще започнем с две примерни изречения, за да добиете представа за задачата. След тях започва настоящият експеримент.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    ,

    
  newButton("continue_to_example_1", "Продължете с пример 1")
          .color("red")
          .print()
          .center()
          .wait()
          .log()
          
          
          ).setOption("hideProgressBar",true)
,

    /*
    
newTrial("preload_demo_label",
      newText("Материалите за демонтрацията се зареждат. Моля изчакайте.")
        .css("width","40em")
        .css("line-height","1.4")
        //.css("padding-top","40px")
        .css("padding-bottom","20px")
        .print()
    ,
    newTimer("wait", 5000)
    .start()
    .wait()
           ).setOption("hideProgressBar",true)
 ,

  
CheckPreloaded( startsWith("demo1","demo2"))
    .label("preload_demo" );

   */



newTrial ("demo1",

 newText("Пример 1:")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    
    ,

     //newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      //.print()
   //,

            
        //newText("instructions2", "Ако има придружаващ въпрос към изречението, моля, отговорете на въпроса.<br>За да отговорите с <i>да</i>, натиснете с мишката върху <b>Да</b> или натиснете бутона <b>A</b> на клавиатурата.<br>За да отговорите с <i>не</i>, натиснете с мишката върху <b>Не</b> или натиснете бутона <b>L</b> на клавиатурата.")
          //.center()
          //.css("bottom")
          //.css("padding-top","20px")
          //.css("padding-bottom","20px")
          //.css("padding-top","20px")
          //.print()
         //,
     newTimer(1000)
        .start()
        .wait()
     ,  
            
     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()

    ,
         newController("DashedSentence", {s: "Вчера стопанинът обязди няколко млади черни",mode:"speeded acceptability", display: "in place",wordTime:1000,wordPauseTime:0, hideUnderscores: true})
        //newController("DashedSentence", {s: "<p style=\"font-size:18pt\">"+variable.Final_sentence+"</p>", display: "in place", hideUnderscores: true})
        //newController("DashedSentence", {s: variable.Final_sentence+"</p>", display: "in place", hideUnderscores: true,html
            .css("font-size","18pt")
            .center()
            .print()
            .log()
            .wait()
            .remove()
   
        ,
        //<p style=\"font-size:18pt\">+"</p>"
        newController("Question", {q: Question_asked, as: ["кон","коне","коня"],randomOrder:false,presentHorizontally:true, hasCorrect: parseInt("2")})
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
            .center()
            .print()
            .log()
            .wait()
            .remove()
      ,
      
      newButton("continue_to_example_2", "Продължете с пример 2")
          .color("red")
          .print()
          .center()
          .wait()
          .log()
).setOption("hideProgressBar",true)
,

newTrial("demo2",

 newText("Пример 2:")
     .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    ,

     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
   ,
    



         //newText("instructions1", "Моля, натискайте бутона на клавиатурата за разстояние, докато прочете изречението.")
         //.center()
          //.css("padding-bottom","20px")
          //.css("padding-top","20px")
            //.print()
            //,
            
        //newText("instructions2", "Ако има придружаващ въпрос към изречението, моля, отговорете на въпроса.<br>За да отговорите с <i>да</i>, натиснете с мишката върху <b>Да</b> или натиснете бутона <b>A</b> на клавиатурата.<br>За да отговорите с <i>не</i>, натиснете с мишката върху <b>Не</b> или натиснете бутона <b>L</b> на клавиатурата.")
          //.center()
          //.css("bottom")
          //.css("padding-top","20px")
          //.css("padding-bottom","20px")
          //.css("padding-top","20px")
          //.print()
         //,
         newTimer(1000)
        .start()
        .wait()
     ,  
     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
    ,    
         newController("DashedSentence", {s: "Вчера стопанката нахрани няколко стари бели",mode:"speeded acceptability", display: "in place",wordTime:1000,wordPauseTime:0, hideUnderscores: true})
        //newController("DashedSentence", {s: "<p style=\"font-size:18pt\">"+variable.Final_sentence+"</p>", display: "in place", hideUnderscores: true})
        //newController("DashedSentence", {s: variable.Final_sentence+"</p>", display: "in place", hideUnderscores: true,html
            .css("font-size","18pt")
            .center()
            .print()
            .log()
            .wait()
            .remove()
            
        ,

        newController("Question", {q: Question_asked, as: ["крава","крави"],randomOrder:false,presentHorizontally:true, hasCorrect: parseInt("1")})
            .css("width","40em")
            .css("line-height","1.4")
            //.css("padding-top","40px")
            .css("padding-bottom","20px") 
            .center()
            .print()
            .log()
            .wait()
            .remove()
      ,

      newButton("continue_to_experiment", "Продължете с експеримента")
          .color("red")
          .print()
          .center()
          .wait()
          .log()

).setOption("hideProgressBar",true)

,
/*
newTrial("preload_trials_label",
       newText("Материалите за демонтрацията се зареждат. Моля изчакайте.")
       .css("width","40em")
       .css("padding-top","10%")
       .css("line-height","1.4")
       .print()
           ).setOption("hideProgressBar",true)

    ,
    newTimer("wait", 5000)
    .start()
    .wait()
           ).setOption("hideProgressBar",true)
 ,

  
CheckPreloaded( startsWith("experiment"))
    .label("preload_trials" );    

*/

newTrial ("expbegin",
    
newText("Сега сме готови да започнем с основния експеримент.")
    .css("width","40em")
    .css("line-height","1.4")
    //.css("padding-top","40px")
    .css("padding-bottom","20px")
    .print()
    ,

      newButton("begin_experiment", "Започнете експеримента")
          .color("red")
          .print()
          .center()
          .wait()
          .log()
).setOption("hideProgressBar",true)
,

Template(stimuli_csv_table,
//Template("design_final.csv",
//Template("test_csv",

      variable => newTrial("experiment",

    fullscreen()
        ,
    
    //item_index=item_index+1,
    
         //newText("instructions1", "Моля, натискайте бутона на клавиатурата за разстояние, докато прочете изречението.")
          //.center()
          //.css("padding-bottom","20px")
          //.css("padding-top","20px")
            //.print()
            //,
            
        //newText("instructions2", "Mоля, отговорете на въпроса.<br>За да отговорите, натиснете с мишката върху а клавиатурата.<br>За да отговорите с <i>не</i>, натиснете с мишката върху <b>Не</b> или натиснете бутона <b>L</b> на клавиатурата.")
          //.center()
          //.css("bottom")
          //.css("padding-top","20px")
          //.css("padding-bottom","20px")
          //.css("padding-top","20px")
          //.print()
         //,
    
         newTimer(1000)
        .start()
        .wait()
     ,
       
     newText("")
      //.css("line-height","1.4")
      //.css("padding-top","5%")
      .print()
      
      ,

        //...dashed(variable.Final_sentence, 
                //'remove')
                
        //newVar("RT",0
        //.global()
        //.set(a=>Date.now())
        
        //getVar("RT",set(a=>Date.now()-a))
         //   .log()
         
         newController("DashedSentence", {s: variable.Final_sentence,mode:"speeded acceptability", display: "in place",wordTime:1000,wordPauseTime:0, hideUnderscores: true})
        //newController("DashedSentence", {s: "<p style=\"font-size:18pt\">"+variable.Final_sentence+"</p>", display: "in place", hideUnderscores: true})
        //newController("DashedSentence", {s: variable.Final_sentence+"</p>", display: "in place", hideUnderscores: true,html
            .css("font-size","18pt")
            .center()
            .print()
            .log()
            .wait()
            .remove()
            
        ,
        (variable.Target_noun_plural_form!=variable.Target_noun_count_form?
        [
       
        newController("Question", {q: "", as: [variable.Target_noun_base_form,variable.Target_noun_plural_form,variable.Target_noun_count_form],randomOrder:false,presentHorizontally:true, hasCorrect: parseInt(variable.Correct_response_as_integer)})
        //newController("Question", {q: "Моля довършете изречението, като поставете последната дума в подходящата форма чрез натискане с мишката върху съответната форма", as: [variable.Target_noun_base_form,variable.Target_noun_plural_form,variable.Target_noun_count_form],randomOrder:false,presentHorizontally:true, hasCorrect: parseInt(variable.Correct_respo_as_integer)})
            .css("width","40em")
            .css("line-height","1.4")
            //.css("padding-top","40px")
            .css("padding-bottom","20px") 
            .center()
            .print()
            .log()
            .wait()
            .remove()
        ]
        :
        [
            
        newController("Question", {q: "", as: [variable.Target_noun_base_form,variable.Target_noun_plural_form],randomOrder:false,presentHorizontally:true, hasCorrect: parseInt(variable.Correct_response_as_integer)})
            .center()
            .print()
            .log()
            .wait()
            .remove()

            
            
            ]
        
        )    
        
        
     
        
            
        //,
        //newText("test2", "Presssssssssss <b>A</b> for true. Press <b>L</b> for false.")
          //.center()
          //.css("padding-bottom","20px")
          //.css("padding-top","20px")
          //.print()
          //.wait()
        

        //,
        //newText("cq", variable.Question)
            //.css("line-height", "2.5")
            //.print()
        //,
        //newKey("AL")
            //.log()
            //.wait()

          
      //,
      
     //newButton
          //.color("red")("continue_with_next_sentence", "Продължете със следващия пример")
          //.print()
          //.center()
          //.wait()
          //.log()
  
  
  ).setOption("hideProgressBar",false)
.log("Question asked",Question_asked)
.log("Type",variable.Type)
.log("Condition label",variable.Condition_label)
.log("Intervening noun base form",variable.Intervening_noun_base_form)
.log("Intervening noun plural form",variable.Intervening_noun_plural_form)
.log("Intervening noun count form",variable.Intervening_noun_count_form)
.log("Gender of intervening noun",variable.Gender_of_intervening_noun)
.log("Number of intervening noun",variable.Number_of_intervening_noun)
.log("Gender of target noun",variable.Gender_of_target_noun)
.log("Number of target noun",variable.Number_of_target_noun)
.log("Beginning",variable.Beginning)
.log("Numeral",variable.Numeral)
.log("First adjective",variable.First_adjective)
.log("First position",variable.First_position)
.log("Condition beginning",variable.Condition_beginning)
.log("Condition beginning correct form",variable.Condition_beginning_correct_form)
.log("Marker for indefinite form usage of intervening noun",variable.Marker_for_indefinite_form_usage_of_intervening_noun)
.log("Second position",variable.Second_position)
.log("Condition end",variable.Condition_end)
.log("Third position",variable.Third_position)
.log("Target noun base form",variable.Target_noun_base_form)
.log("Target noun plural form",variable.Target_noun_plural_form)
.log("Target noun count form",variable.Target_noun_count_form)
.log("Target noun other plural forms",variable.Target_noun_other_plural_forms)
.log("Group",variable.Group)
.log("Numeral Type",variable.Numeral_Type)
.log("Final sentence",variable.Final_sentence)
.log("Target noun after final sentence",variable.Target_noun_after_final_sentence)
.log("Correct response as integer",variable.Correct_response_as_integer)
.log("Number of words in condition",variable.Number_of_words_in_condition)
.log("Unique id",id)
.log("Type of experiment",type_of_experiment)
.log("Screen width",screen_width)
.log("Device name",device_name)
.log("Mobile device based on screen width",mobile_device_based_on_screen_width)
.log("Mobile device based on device name",mobile_device_based_on_device_name)

//.log("Index of item",item_index)
  )
,
  
newTrial( "bye" ,
   exitFullscreen()
   ,
   newText("Това е краят на екперимента. Благодарим Ви за участието! Ако имате въпроси относно експеримента, може да се обърнете по електронна поща към професор Артур Степанов 'arthur.stepanov@ung.si', професор Пенка Статева 'penka.stateva@ung.si' или Данил Христов 'danil.khristov@ung.si'.")
       .css("width","40em")
       .css("padding-top","10%")
       .css("line-height","1.4")
       .print()

    //,  
   //newButton()
      .wait()  // Wait for a click on a non-displayed button = wait here forever
          ).setOption("hideProgressBar",true)
;
//PennController.Debug();
DebugOff();
//.setOption("showProgressBar ",false)
//.setOption( "countsForProgressBar" , false )
// Make sure the progress bar is full upon reaching this last (non-)trial