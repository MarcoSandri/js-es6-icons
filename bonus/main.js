const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: getColor()
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: getColor()
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: getColor()
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: getColor()
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: getColor()
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: getColor()
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: getColor()
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: getColor()
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: getColor()
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: getColor()
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: getColor()
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: getColor()
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: getColor()
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: getColor()
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: getColor()
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: getColor()
	}
];

let filter = document.getElementById("filter")
let container = document.getElementById("icons-container")

showIconArray(icons, container);




filter.addEventListener('change', function(){

    let select = this.value;

    if(select == "all") {
        showIconArray(icons, container);
    } else{
        let filtered = icons.filter((icona) => {
            if(icona.type == select) {
                return true;
         }
         return false;
        });

        showIconArray(filtered, container);
    }

});

function showIconArray(array, container) {
    let string = "";
    array.forEach((icona) => {
        
        label = icona.name;

        string += ` <div class="icon">
                        <i style="color:${icona.color}" class="${icona.family} ${icona.prefix}${icona.name}"></i>
                        <div class="icon-text">${label.toUpperCase()}</div>
                    </div>
                    `
    
    });
    container.innerHTML = string;
};

function getColor () {
    let code = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let color = "#"
    for(let i = 0; i < 6; i++) {

        let random = Math.floor(Math.random() * code.length) + 1;
        color += code[random];
    }
    return color;
};