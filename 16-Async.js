const fs = require('fs');
const superagent = require('superagent');

//promises to replace callback

const readFilePro = (file) => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject('I could not find the file 🥲');
            resolve(data);
        });
    });
};

const writeFilePro = (file, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, data, (err) => {
            if (err) reject('I could not write the file 🥲');
            resolve('success');
        });
    });
};

// readFilePro(`${__dirname}/content/dog.txt`)
//     .then((data) => {
//         console.log(`Breed: ${data}`);
//         return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//     })
//     .then((res) => {
//         console.log(res.body.message);
//         return writeFilePro(`./content/dog-image.txt`, res.body.message);
//     }).then(() => {
//         console.log('Random dog image saved successfully');
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });

//Callback for asynchronously - simple callback hell
// fs.readFile(`${__dirname}/content/dog.txt`, (err, data) => {
//     console.log(`Breed: ${data}`);

//     superagent
//         .get(`https://dog.ceo/api/breed/${data}/images/random`)
//         .end((err, res) => {
//             if (err) return console.error(err.message);
//             console.log(res.body.message);

//             fs.writeFile(`./content/dog-image.txt`, res.body.message, (err) => {
//                 if (err) return console.error(err.message);
//                 console.log('Random dog image saved to file!');
//             });
//         });
// });

const getDogPic = async () => {
    try {
        const data = await readFilePro(`${__dirname}/content/dog.txt`);
        console.log(`Breed: ${data}`);

        const res1Pro = superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`
        );
        const res2Pro = superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`
        );
        const res3Pro = superagent.get(
            `https://dog.ceo/api/breed/${data}/images/random`
        );
        const all = await Promise.all([res1Pro, res2Pro, res3Pro]);
        const imgs = all.map(el => el.body.message);
        console.log(all);
        console.log(imgs);



        await writeFilePro(`./content/dog-image.txt`, imgs.join('\n'));
        console.log('Random dog image saves to file!');
    } catch (err) {
        console.log(err);
        throw err;
    }
    return `2 : Ready 🐶`;
};

//IIEE
(async () => {
    try {
        console.log('1 : Will get dog picks!');
        const x = await getDogPic();
        console.log(x);
        console.log('3 : Done getting dog pics!');
    } catch (err) {
        console.log('Error💥');
    }
})();



/* console.log('1 : Will get dog picks!');
getDogPic()
    .then((x) => {
        console.log(x);
        console.log('3 : Done getting dog pics!');
    })
    .catch((err) => {
        console.log('Error💥');
    });
 */