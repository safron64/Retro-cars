const content = {
	size: 370,
	newsContent: document.getElementsByClassName('content__text'),
	buildText: function() {
		for (let j = 0; j < this.newsContent.length; j++) {
			const newsText = this.newsContent[j].textContent;
			if (newsText.length > this.size) {
				this.newsContent[j].innerHTML = newsText.slice(0, this.size) + '...';
			}
		}
	}
}
content.buildText();