### Overview

- I built this tool for personal use. It may not be the best option available, but it suits my needs perfectly.

- You can either use the [web app](https://omd.vercel.app), or send data directly to the API endpoint for processing.

__Examples__

The examples used in the web application are identical to these.


```sh
curl -X POST https://omd.vercel.app/api/convert -H "Content-Type: application/json" -d '{
	"data": {
		"header": ["Day", "Rank", "Grade"],
		"table": [
			["Tuesday", 7, "C Minus"],
			["Friday", 1, "A Plus"],
			["Dryday", 4, "B Minus"]
		]
	},
	"options": {}
}'
```

```sh
curl -X POST https://omd.vercel.app/api/convert -H "Content-Type: application/json" -d '{
	"data": {
		"header": ["Name", "Age", "City"],
		"table": [
			["Alice", 30, "New York"],
			["Bob", 25, "San Francisco"],
			["Charlie", 35, "Los Angeles"]
		]
	},
	"options": {
		"align": ["left", "center", "right"]
	}
}'
```

```sh
curl -X POST https://omd.vercel.app/api/convert -H "Content-Type: application/json" -d '{
	"data": [
		["Product", "Price", "Quantity"],
		["Apple", "$1", 50],
		["Banana", "$0.5", 100],
		["Cherry", "$2", 200]
	],
	"options": {}
}'
```


```sh
curl -X POST https://omd.vercel.app/api/convert -H "Content-Type: application/json" -d '{
	"data": ["Item 1", "Item 2", "Item 3"],
	"options": {}
}'
```

```sh
curl -X POST https://omd.vercel.app/api/convert -H "Content-Type: application/json" -d '{
	"data": {
		"header": ["ID", "Name", "Active"],
		"table": [
			[1, "John Doe", true],
			[2, "Jane Smith", false],
			[3, "Sam Brown", true]
		]
	},
	"options": {}
}'
```

```sh
curl -X POST https://omd.vercel.app/api/convert -H "Content-Type: application/json" -d '{
	"data": {
		"header": ["Country", "Capital", "Population"],
		"table": [
			["USA", "Washington D.C.", 331002651],
			["Canada", "Ottawa", 37742154],
			["United Kingdom", "London", 67886011]
		]
	},
	"options": {}
}'
```

```sh
curl -X POST https://omd.vercel.app/api/convert -H "Content-Type: application/json" -d '{
	"data": {
		"table": [
			["Alice", 30, "New York"],
			["Bob", 25, "San Francisco"],
			["Charlie", 35, "Los Angeles"]
		]
	},
	"options": {}
}'
```

```sh
curl -X POST https://omd.vercel.app/api/convert -H "Content-Type: application/json" -d '{
	"data": [
		["Header1", "Header2", "Header3"],
		["Row1-Col1", "Row1-Col2", "Row1-Col3"],
		["Row2-Col1", "Row2-Col2", "Row2-Col3"]
	],
	"options": {}
}'
```
