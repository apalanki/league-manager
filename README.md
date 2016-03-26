# League Manager
To manage Arch Badminton Club Men's doubles League results.

To run this project: 

- Install MeteorJS from [MeteorJS] [https://www.meteor.com] website
- Clone the repo
- go into the root of the project and 
```sh
    $ meteor
```
- connect to mongo db instance that starts up along with meteor
- use meteor db
- create new collection called players
- insert the following players into db players collection:
```sh
    [
       {"name": "Xiaoming Zhang", "score": {"prev": 346, "current": 346}, "feePaid": 12, "playNextLeague": true},
       {"name": "Xiao Wu", "score": {"prev": 336, "current": 336}, "feePaid": 12, "playNextLeague": true},
       {"name": "Siyuan An", "score": {"prev": 365, "current": 365}, "feePaid": 12, "playNextLeague": true},
       {"name": "Chris Lee", "score": {"prev": 334, "current": 334}, "feePaid": 8, "playNextLeague": true},
       {"name": "Anudeep", "score": {"prev": 332, "current": 332}, "feePaid": 10, "playNextLeague": true},
       {"name": "Ekk", "score": {"prev": 332, "current": 332}, "feePaid": 0, "playNextLeague": true},
       {"name": "Wei Huang", "score": {"prev": 315, "current": 315}, "feePaid": 12, "playNextLeague": true},
       {"name": "Bunty", "score": {"prev": 315, "current": 315}, "feePaid": 12, "playNextLeague": true}
    ]
```
