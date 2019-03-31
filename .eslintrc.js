module.exports = {
    "extends": "airbnb-base",
    "env": {
        "browser": true,
        "node": true,
        "jquery": true
    },
    "rules": {
        /* 
        блок начинается и заканчивается пустой строкой 
        */
        "padded-blocks": [
            "error", 
            "always", 
            { allowSingleLineBlocks: true }
        ],
        /* отключение проверки статических методов 
            static sayHi() {
                    console.log("hi");
                }  
        */
        "class-methods-use-this": [
            "off", 
            { 
                "exceptMethods": ["foo"] 
            }
        ],
        //вызов функции до объявления
        "no-use-before-define": [
            "error",
            {
               "functions": false 
            }            
        ],
        // разрешаем использовать console.
        "no-console": 0,
        // большие отсупы
        "no-multi-spaces": [
            "error",
            {
                "ignoreEOLComments": true,          // в коментариях
                "exceptions": { 
                    "VariableDeclarator": true }    // в объявление переменных
            }
        ],
        // совместное объявление переменных
        "one-var": [
            "error",
            "always"
        ],
        // каждая переменная на новой строке
        // let a,
        //     b = 10;
        "one-var-declaration-per-line": [
            "error", 
            "always"
        ]
    }
};