$(document).ready(function() {
  $("#formOne").submit(function() {
    const person1Input = $(".person1").append("blah blah");
    const person2Input = $(".person2").append("blah blah");
    const animalInput = $(".animal").append("blah blah");
    const exclamationInput = $(".exclamation").append("blah blah");
    const verbInput = $(".verb").append("blah blah");
    const nounInput = $(".noun").append("blah blah");

    $(".person1").append(person1Input);
    $(".person2").append(person2Input);
    $(".animal").append(animalInput);
    $(".exclamation").append(exclamationInput);
    $(".verb").append(verbInput);
    $(".noun").append(nounInput);

    $("#story").show();

    e.preventDefault();
  });
});