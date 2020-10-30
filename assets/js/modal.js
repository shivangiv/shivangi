class Slider {
    constructor(slide, size) {
        this.slideImage = slide.children[slide.children.length - 1].children[0];
        this.prevButton = slide.children[0];
        this.nextButton = slide.children[1];
        this.slideIndex = 0;
        this.slideLength = size;
        this.onStartSlide();
    }

    onStartSlide() {
        this.nextSlide();
        this.prevSlide();
    }

    nextSlide() {
        this.nextButton.addEventListener("click", () => {
            if (this.slideIndex === this.slideLength - 1) {
                this.slideIndex = 0;
                this.getNewImage(this.slideImage);
            }
            else {
                this.slideIndex += 1;
                this.getNewImage(this.slideImage);
            }
        });
    }

    prevSlide() {
        this.prevButton.addEventListener("click", () => {
            if (this.slideIndex === 0) {
                this.slideIndex = this.slideLength - 1
                this.getNewImage(this.slideImage);
            } else {
                this.slideIndex -= 1
                this.getNewImage(this.slideImage);
            }
        });
    }

    getNewImage(imageSource) {
        let nextImage = `${this.slideIndex}.png`;
        let source = imageSource.src.split("/");
        source[source.length - 1] = nextImage;
        let newImage = source.join("/");
        this.slideImage.src = newImage;
        console.log(this.slideIndex, this.slideLength);
    }


    printOut() {
        console.log(this.slideImage, this.prevButton, this.nextButton, this.slideIndex, this.slideLength);
    }

}

const sliders = document.querySelectorAll(".slideshow-container");
for (s of sliders) {
    let slider = new Slider(s, parseInt(s.attributes.size.value));
}