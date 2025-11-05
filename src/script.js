const anchors = document.querySelectorAll("nav a");

for(anchor of anchors)
{
	anchor.addEventListener("click", (event) => {
		event.preventDefault();

		sectionName = event.currentTarget.hash.substring(1);
		section = document.getElementById(sectionName);

		section.scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	});
}

class Carrossel
{
	slides;
	navButtons;
	sectionButtons;

	constructor(slides, navButtons, sectionButtons)
	{
		this.slides = slides;
		this.navButtons = navButtons;
		this.sectionButtons = sectionButtons;

		for(let button of navButtons)
		{
			button.addEventListener("click", this.rotate.bind(this));
		}

		for(let button of sectionButtons)
		{
			button.addEventListener("click", this.scrollToSection.bind(this));
		}
	}

	slideIndex = 0;
	rotate()
	{
		switch(event.target.dataset.action)
		{
			case "voltar":
				this.slideIndex--;
				break;

			case "avancar":
				this.slideIndex++;
				break;
		}

		if(this.slideIndex > 2)
		{
			this.slideIndex = 0;
		}
		else if(this.slideIndex < 0)
		{
			this.slideIndex = 2;
		}

		this.slides[this.slideIndex].scrollIntoView({
			behavior: "smooth",
			block: "nearest"
		})
	}

	scrollToSection()
	{
		switch(event.target.dataset.section)
		{
			case "planos":
				document.getElementById(event.target.dataset.section).scrollIntoView({
					behavior: "smooth",
					block: "start"
				});
				break;
	
			case "indicacao":
				document.getElementById(event.target.dataset.section).scrollIntoView({
					behavior: "smooth",
					block: "start"
				});
				break;
	
			case "planos-empresariais":
				document.getElementById(event.target.dataset.section).scrollIntoView({
					behavior: "smooth",
					block: "start"
				});
				break;
		}
	}
}

const carrosel = new Carrossel(
	document.querySelectorAll("#inicio ul li"),
	document.querySelectorAll(".botao-navegacao"),
	document.querySelectorAll(".botao-section")
);
