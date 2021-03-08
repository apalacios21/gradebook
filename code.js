$(document).ready(function(){
    $("form").submit(studentGrade);
});



function studentGrade(event){
    event.preventDefault();

    let fname = $("input#fname").val();
    let lname = $("input#lname").val();
    let pointsEarned = $("input#pEarned").val();
    let pointsPossible = $("input#pPossible").val();

    let percentage = ((pointsEarned / pointsPossible) * 100).toFixed(2);

    let grade = "";
    if(percentage >= 90.00){
        grade = "A";
    }else if(percentage >= 80.00 && percentage < 90.00){
        grade = "B";
    }else if(percentage >= 70.00 && percentage < 80.00){
        grade = "C";
    }else if(percentage >= 65.00 && percentage < 70.00){
        grade = "D";
    }else{
        grade = "F";
    }

    let student ={firstName: fname, lastName: lname, pointsEarned: pointsEarned, pointsPossible: pointsPossible, percentage: percentage, letterGrade: grade}

    $("p#outputName").text(`Name: ${student.firstName} ${student.lastName}`);
    $("p#outputPercent").text(`Percentage: ${student.percentage}%`);
    $("p#outputGrade").text(`Grade: ${student.letterGrade}`);

}

