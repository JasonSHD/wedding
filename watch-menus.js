var fs = require('fs');

var watch_menus = (function () {
    var menu_items = [];

    function parse (argv) {
        var i, j;
        var menu_item_list;
        argv = argv.slice(2);

        for (i = 0; i < argv.length; i++) {
            menu_item_list = parseFile(argv[i]);

            for (j = 0; j < menu_item_list.length; j++) {
                menu_items.push(menu_item_list[j]);
            }
        }
    }

    function parseFile (filename) {
        var data = fs.readFileSync(filename, 'utf-8');
        return JSON.parse(data);
    }

    function printMenuItems () {
        console.log(JSON.stringify(menu_items));
    }

    return {
        parse: parse,
        printMenuItems: printMenuItems
    };
})();

watch_menus.parse(process.argv);
watch_menus.printMenuItems();
