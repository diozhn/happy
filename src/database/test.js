const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then( async db => {
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-6.365563",
        lng: "-39.3014551",
        name: "Orfanato de Orós",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        images: [
            "https://images.unsplash.com/photo-1601564921698-0166194c51ee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1598454444427-8bffa498b6f2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),

        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })

    //consultar dados na tabela
    //const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    //console.log(selectedOrphanages)
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    //deletar dado da tabela
   // await db.run("DELETE FROM tabela WHERE id =''");
})