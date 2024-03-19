const body = document.body;

function createTag(tagName, className, height, width) {
	const tag = document.createElement(tagName);
	tag.classList.add(className);
	tag.style.height = `${height}`;
	tag.style.width = `${width}`;
	return tag;
}

const section = createTag("section", "section1", "300px", "100%");
body.appendChild(section);

for (let i = 0; i <= 10; i++) {
	const div = createTag("div", `div${i}`, "20px", "50%");
	section.appendChild(div);
}

const div1 = document.querySelector(`.div1`);
div1.style.backgroundColor = "#ff6b81"; //