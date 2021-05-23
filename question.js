const inquirer = require('inquirer');
const chalk = require('chalk')

 function askqustion(){
    let questions = inquirer.prompt([{type:'list',name:'question1' ,message:'which  one of this is correct\n',choices:['Banglore is the capital of karnataka','mumbai is the capital of gujarat']},
    {type:'list',name:'question2' ,message:'Which is the capital city of india\n',choices:['New Delhi','Bengaluru','chennai','Varanashi']},{type:'list',name:'question1' ,message:'Which is the capital city of india',choices:['New Delhi','Bengaluru','chennai','Varanashi']},
    {type:'list',name:'question3' ,message:'Which is the National Sports  of india\n',choices:['Kabaddi','Cricket','Hockey','Football']},
    {type:'list',name:'question4' ,message:'Which one of this is called by browser\n',choices:['Chrome','Firefox','Microsoft edge','All of the above']}])
    .then((answer)=>{
      let count = 0;
   
      if(answer.question1=='Banglore is the capital of karnataka'){
        console.log('q1')
         count++;
         
     }
     if(answer.question2=='New Delhi'){
      

      count++;
      
     }
     if(answer.question3=='Hockey'){
      

      count++;
     
     }
     if(answer.question4=='All of the above'){
     
        count++;
        
     }
     console.log(chalk.green(`you answerd ${count} out of 4`))
    })
    
 }
 module.exports = askqustion