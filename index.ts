const notes = [
    {
        id: "7D94C328-4BAF-4830-B5B7-763096A06AE3",
        name: "my first note",
        pinned: true,
    },
    {
        id: "8113F8A2-636A-4EE3-86E0-1521AA8FB869",
        name: "my second note",
        pinned: true,
    },

    {
        id: "92304FDE-3936-41FC-B225-AFAA045090D7",
        name: "my shist note",
        pinned: false,
    },
];

type Ret = "all" | "pinned";

function returnThings(name: Ret) {
    notes.map((note) => {
        if (name === "all") {
            console.log(note);
        } else if (note.pinned === true) {
            console.log(note);
        }
    });
}

returnThings("all");
