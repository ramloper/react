function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "tt",
                id: "test1234"
            })
        }, 2000);
    })
}


async function printData() {
    const data = await getData();
    console.log(data)
}

printData()
