const slides = document.querySelectorAll("#inicio ul li");
const previousButton = document.getElementById("voltar");
const nextButton = document.getElementById("avancar");

// Carrossel da seção 'inicio'
let slideIndex = 0;

function handleSlider(action)
{
	switch(action.target.id)
	{
		case "voltar":
			slideIndex--
			break;

		case "avancar":
			slideIndex++
			break;
	}

	if(slideIndex > 3)
	{
		slideIndex = 0;
	}

	if(slideIndex < 0)
	{
		slideIndex = 3
	}

	slides[slideIndex].scrollIntoView({
		behavior: "smooth",
		block: "nearest"
	});
}

previousButton.addEventListener("click", handleSlider);
nextButton.addEventListener("click", handleSlider);
