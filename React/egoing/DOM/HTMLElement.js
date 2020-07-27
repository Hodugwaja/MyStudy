    var li = document.getElementById('Active');
    console.log(li.constructor.name); // HTMLLIElement 
    
    var lis = document.getElementsByTagName('li');
    console.log(lis.constructor.name); // HTMLCollection
    
    var target = document.getElementById('Active');
    console.log(target.constructor.name); // HTMLLIElement

    var target = document.getElementById('anchor');
    console.log(target.constructor.name); // HTMLAnchorElement

    var target = document.getElementById('button');
    console.log(target.constructor.name); // HTMLInputElement