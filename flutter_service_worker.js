'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "af27000ef8ec09ad45fbf34822241d4b",
".git/config": "4748976379a23f9405de3b468b4e0c47",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6d488eddcb7bccf6ecbbf98d26c7e79a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "666c431995f974a48768a1161f41f56d",
".git/logs/refs/heads/master": "666c431995f974a48768a1161f41f56d",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/03/02fd6aabef63c2676095a2972a1ba2679861c9": "1157604bbf69355ef10c4b5ca285e2e5",
".git/objects/03/c8d41ee33f68301de630219fa3b0fc18ba0d98": "5bae93e4efb4c600d8fe4fec7d481e1d",
".git/objects/04/f761de851dd8f0df3dbf4578b413dcc5f2272b": "b55a3cb7c487487cadcb1518c5d98697",
".git/objects/04/fe4757258d11ef4cd523d52c160b71f7e40ca2": "3b579e79975db643abca302bad6ad360",
".git/objects/06/9b4d29d502411390297294d9bd430d3767c1f9": "8a343f4c975734089bb15811bbb4f3c8",
".git/objects/07/3d59d418f17edfb0faaf475e96ca2d2ac8bfcd": "865c9adeca6123433634c274a2276e84",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/ede234a14486ec5aff3cfdb4797747659922bf": "3d293ae7fc42cf1f8053bc0386d47db9",
".git/objects/0a/25f31a241a8fed28830993a6d03772cff6a133": "7d6d61949f57b0c7e5cf17f5778d934d",
".git/objects/0a/9cf59590b836e62d72f99a9333462eb152c66b": "5fd16ec1c92c3b39838cbce5a5abcae9",
".git/objects/0b/bc7cdccbddbcea1e0efcfd0dab6d2bf6904ba9": "64991e97b23b2ccc311d67d3853240f6",
".git/objects/10/9855ede6c43dadf957d522dbda743c29f0ff22": "98f12f5fb9afac8de48839a9f663d808",
".git/objects/10/d24c32125c6c8f410fc9207df65028bd633613": "51bc0b1f986ffcdb918ac28beb8d9d5e",
".git/objects/18/2203700ae641be1eac86305840b980fd64672c": "a4c8f59d013b70baad0e1c8e76493266",
".git/objects/18/b95a0b1c364fe21842108e90b1f3cc089776c2": "a493174fcdaacf7afc9af7ede8498982",
".git/objects/1a/1581daa2fd95bce65e146860e11ee7a03d2f59": "a2b37cb899f6906c2e41cda88fe878f4",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/9a8f24b2ccacec46cb23a2f1f7d7150bf9a781": "cfab270ec8fcaff8ef4aa4e16c02c231",
".git/objects/23/726c48ed8ad818b2dd383a24170a8bd197eba5": "8000c813090ae8d6161f4712042217d0",
".git/objects/27/eb16f1e3e1e3b9c1edde178d3ff2ceeb799db6": "136d665553ed644a43ae8e1afa9ccf9a",
".git/objects/29/58f683387dd720a708ca1a5995fdd039e8fd1b": "887e6f56a687a198b20f92127b1491d9",
".git/objects/2a/12e6161b368bab21dba2599df6382683878bc5": "f844e3ec9cd5d24c29666706676021c6",
".git/objects/2a/7fafcc1a65329b58eaeef12231eb34880a428f": "29c9b55ac51b26378f5b77bbdf94cfa8",
".git/objects/2f/dc62ab666cdf2a9573cf35930800d427d8dc3c": "22ea797c15bc6157a4d046456a67edd7",
".git/objects/30/503dd465f6801f5320345a62c8ebdbb5022197": "8b537b6527753e32ee7c2955a5354cfc",
".git/objects/31/38df202f0426ea957246e1fa9d5a641e05e273": "e91f05052893f860c578aa7e1c4aed4b",
".git/objects/32/137481954c7679833ddaa938079939be893fa8": "a5abab0e68494dc7885ae15e25b2c35c",
".git/objects/32/8d93e89c8a6d2b22aa90f95bcde33e9c79acf6": "25b74e78126acfc4cd6c56c672333cc6",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/6c5badbdff04d08b8be4739b19233865034e14": "b6e503f1407fe1c20008b4a15afdfade",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/42/57e2a27ff3622afce0b472d327cd3b0c64a57f": "6337a956f49cffe03f38f118ec69adf7",
".git/objects/42/c64382c42e5fbb6cc76da2fadcc25747949d03": "a79cec6a55bbf6cfdcb59b0276a7eb91",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/49/e1b17ae48fdace5e1e911e0fe8617179f75e76": "37f03978b51fc71ecfa18af180a5d0e7",
".git/objects/51/f98af572341717762d252d90dd6ad49bc43296": "37a4ec9c251277f347bc4b2272555aab",
".git/objects/57/09b932af19b541017e7c2a95ed98f64520565c": "c9bdf2ec5d46fc32dc01debcbab6f635",
".git/objects/58/42094d237a66e37e65b71f4a2d6eec656e5290": "86eaac2e2cbb6da3f7ef6c78692696ac",
".git/objects/59/caf77ec52b6c52ee72bd67924a96550d0e08d0": "e8e1e27c115bbde5740c4d671c67cb43",
".git/objects/5a/4803322f3d558d0bdb1ae18152887fe3e49cf1": "c13d870c43979cb1161763cc15b3011f",
".git/objects/63/a248db1406d353b8fbe1982d34988cf8a25fa1": "a9c31c1fd895708c78c59ead264d7b60",
".git/objects/64/411ba82ae8dd63ecb52813112e190bd5829a95": "fed433f17c23e4f0cca94ac1339ce51b",
".git/objects/64/7a76225df427a44fdadae36cb738a3cd4c238e": "6240c41aded5ed997efe49b9cd743287",
".git/objects/68/622432cc123e83e57cc1aed93935be7ee2a6e0": "f77271a334b1e42970f3b5afa4816666",
".git/objects/6a/6a26f66d7c238f9aa11324a6d8c829f8b2aa30": "1ab57d09bf4621c403679ccfaf205af1",
".git/objects/6b/003d187632f2cbe5244d98100a5ff80f40f453": "2468bab1c9a39c6e373992e5378f2d90",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/c42953c8b6d76204c24e075196a78960bec748": "de440d645bb4f0ee54f3a4248b04000f",
".git/objects/73/c4220c177f49c66a67597d7943643bc88437de": "f39770606b74342ec02ce7e6f3b4da8a",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/75/84268f07d3b40c4b6df789de4c91016e7488db": "ec6f76bf37a7b46af1ec2c50efd56814",
".git/objects/76/3c43d41b82786222ecc4a4711880d0bc242672": "c326528441516206d92ff657d425c763",
".git/objects/76/f69dad46d97238e4baeecf8e242e9657185d3c": "542cf601dfaf7aeb44032fbb94077442",
".git/objects/7a/20b87842df65c0402691c8588e214bd4f9be16": "badec591795c4fd483ac2cba4a09f810",
".git/objects/7e/7565561837b1e24478de8a04625217d4a41069": "c07480f3068f0db18de4a5603ba08d7b",
".git/objects/82/8389184483ef49147a548ee66e4eee1820df60": "aacc21b4e858b8fb96adb24be50f6d1f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/012320abd564208e8fef99acf6c6c32af3055c": "7e8470f8eb2370521938b881a1cea0c2",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f10df638837d086d6f2c8ff612d41cca333e43": "97678847ea4afc260810f66dfc7fcbcc",
".git/objects/89/3047aba238124511bed493e5197692ad0abb42": "cae4f7c1191298a57e3812c80395da09",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/c617fd26297e7b37b522446c3a87bf330f5181": "6f7dbbde0381f7d2edf8149dfec24e1e",
".git/objects/8c/7fcf81e92738b0c5c0fe9d8bdf1ff50bda9c27": "2358189ec2a415ea7355d07b4af62afa",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/368bccbcf50c53a340c65d79231174deb60d8f": "84d4f91df957ea4a53acf91f5f05bcd0",
".git/objects/a6/5ca8cada0ee5b36a1fbb633450ced045fb3f64": "32c8fefc04a7ca492b913385c063550f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/47a1878528d668309127b15da7b8c813b86de4": "5268671156c5640e085dc209cf16eca5",
".git/objects/b4/8cdf0545b40988c4812edbfe2cad53a07a9bb7": "336fae42012e826f0525cc3f085e36c5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/7feee92c22531e9d5daa424988f8a923014d1c": "2d222fdd20c970b15c045bf569c53f3d",
".git/objects/bc/dbabcd91500babbbf44045f35244c981696468": "5f7c13b30a56a109a61ae291c32df09a",
".git/objects/bf/6104df4d3d43b706d4e3f433f89c68ccbfc71f": "f8bb15560fc4b05f24958f20cb0fc8d3",
".git/objects/c4/ac71574c33e566ab6be463b3d066dcb9dfd26c": "0f3223e61d864c467a5712823f90b2fa",
".git/objects/c7/eadd80eb592d5b5edf1b6694ac94b2cbab6184": "752fe613a3cf25d34f183912c750bb2f",
".git/objects/c8/c51ca4dc4168b81acb5cd84bea9e2b8cd737c7": "8441f9323ac93bc92a5d72a12d969bb4",
".git/objects/ca/721d815440d00cb76112736dcddf18099a2b57": "ed4cc03b5f115abb1e8b756cf20e7f9e",
".git/objects/cb/845bdffbd787f0e7356dcfd2414bd4765a7eb9": "b82a3d0d05b19df246831990e3cbab53",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/10058b9cabe3a591808492a8f8aab3d178c83b": "efa04a41905a8577f770d115a4b9a89a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/2e1a25baf8a669f20cc794efee04c80e2b6fd6": "062b031d7be6c91a83f7f36c915447d3",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e7/8542515d21ad2e51b817aa42ac7347d9383549": "8324341ac213e7a29017d20538a547ab",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f9cb84033d807c84e1875d49605fe84becf375": "2121c77838406f194aa70b973b364f6f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/9396b83cac29227a02562cc3bfd9736b9384d1": "5e7e963be316e8edb34f0089f6c86e39",
".git/objects/f8/b2fc6e9d3329a12bd751dcae4a20cef9af96d9": "5c83da6d9d6ea164245f0424763e7bdc",
".git/objects/fd/0bb13de2f111c663c9f1500e0c1105a1e87814": "ad28f67b2c35f8f057a523327cc376ec",
".git/objects/fd/395864d9dd488f2e2998e6777eba2356a2da92": "08204aa4d64ea5ac90b1241285685037",
".git/objects/ff/cda8becd6102bd2fc7ce472a0b3c6a5b6264cf": "1c8319c5669dd8074c8eaa8228711696",
".git/refs/heads/master": "8572e3e1218f87e730e2bbc0334897c1",
"assets/AssetManifest.bin": "5b57ab399052847a905d030b5d1c6c6d",
"assets/AssetManifest.bin.json": "85f7aa5ff49da701e0041d37ecc266c9",
"assets/AssetManifest.json": "6426e5f08d5779d9c2cf45b245dc9db4",
"assets/assets/icons/ai.png": "759dc3c124e614a474921f0780bb57bf",
"assets/assets/icons/alcoholic.png": "aad84f14ee44c706eaaaeebbbe08e1e7",
"assets/assets/icons/danile.png": "8398b2180acadcfd6a9ccbd72d58a524",
"assets/assets/icons/delete.png": "95b55fb72ced6a120056a8f2ec00f702",
"assets/assets/icons/flag.png": "7f9419013adb9421e0c1e055f5a83c6c",
"assets/assets/icons/friends.png": "d71a6f24e2dac663f8362f2b740531c1",
"assets/assets/icons/growth.png": "2abb764997fcf29af883d91344790320",
"assets/assets/icons/gym.png": "18f78f57d33114b48e579989acd3ac45",
"assets/assets/icons/icon.png": "ad9671fb0ad60e2bbe8dbb79c3a9ea90",
"assets/assets/icons/laura.png": "505a77442c298be983e2f32e598f7b6e",
"assets/assets/icons/mic.png": "5de3fae448ff7042a6a2a8038873d2da",
"assets/assets/icons/mike.png": "1a7eb0cc85ed97dd14f9d0fcc3a038e8",
"assets/assets/icons/music.png": "54fd2ee54e2e30401e7695fefa74af25",
"assets/assets/icons/non_smoker.png": "32f80241f0292402487a39ca4e2c8ead",
"assets/assets/icons/party.png": "7c54edb31cbfdc55e6982aa4e20ffc40",
"assets/assets/icons/pause.png": "b90fb89cd2548a3bbc461fafc68332f5",
"assets/assets/icons/pet.png": "22ad94b7e893341d5b01b9d59623b920",
"assets/assets/icons/reload.png": "502b173f9c54810ae43622f55feaafc3",
"assets/assets/icons/robot.png": "16e661d04382f7b511bb43f5cd2b6a70",
"assets/assets/icons/shopping.png": "88c81326cccefb6cd8d187193523da9b",
"assets/assets/icons/sport.png": "19b3c9e264605992160eed6a6fbd4631",
"assets/assets/icons/studious.png": "2da8a9d7e95e1b232887be9062c57b6a",
"assets/assets/icons/tome.png": "79df841f229321c9df1a44f6225906dc",
"assets/assets/icons/travel.png": "1e4cc76265553fca1efcf265e6584973",
"assets/assets/icons/vegan.png": "0f79e0c1c957ffbcc18ed33e884e44f7",
"assets/assets/icons/yoga.png": "6e1d990c093e188b4940d5885c22fbd1",
"assets/assets/images/andera.png": "c6af153cf5d767c60f345b1025e593a0",
"assets/assets/images/bad1.png": "c50df353858b11d9026d5da41c4f10b3",
"assets/assets/images/bad2.png": "98d6edc611d728534bf37d007fed06b2",
"assets/assets/images/bad3.png": "3f190a44c326f378bbb07358215ec2e1",
"assets/assets/images/bad4.png": "a870a000234242af7275d846b11a8812",
"assets/assets/images/couple_sitting.png": "facaedf6efa75fdc055c8032855ec67a",
"assets/assets/images/daniel.png": "b63fd6e99dad741e59e8397d4e169dfe",
"assets/assets/images/first_icon.png": "b8f9ef32e922a532b163e93161a19b00",
"assets/assets/images/first_page.png": "bc26938b63f7eaead4ff722f22155fc8",
"assets/assets/images/home_room.png": "ce4161930361e1efaf9fdad34ade307a",
"assets/assets/images/img.png": "9b9ce0a131a944fcd9d61b2b115fadda",
"assets/assets/images/india.png": "7f9419013adb9421e0c1e055f5a83c6c",
"assets/assets/images/john.png": "46e574aec907b67becbd57f5b757eb0f",
"assets/assets/images/list_room.png": "b8fe6031b3c49ad357af7358c7f3d1cc",
"assets/assets/images/look_room.png": "bd5bb67029089334fb53bcf771784b21",
"assets/assets/images/look_roommate.png": "3132cf056d73cb158a02646a58945050",
"assets/assets/images/man.png": "dbcff15383e7fab468851063b5a496a8",
"assets/assets/images/room.png": "f3a54365ec0681a4edd24c5d39edff91",
"assets/assets/images/sara.png": "c53034e3d45c5e7f74eb2e5ca3b1dff0",
"assets/assets/images/sohan.png": "dbcff15383e7fab468851063b5a496a8",
"assets/assets/images/welcome.png": "3ab2a274c594421804136c78c19855e5",
"assets/FontManifest.json": "f598b4392ce449f90edc471731d22eb3",
"assets/fonts/MaterialIcons-Regular.otf": "8f6e27a30e13c0dc417b0dda8677e545",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/NOTICES": "97f0e3d386ca298c0bc2b82369e00683",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "84d1be4c00bdefab2686ab433713956b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0f3aed118072ecb826fbae589d2fe74b",
"/": "0f3aed118072ecb826fbae589d2fe74b",
"main.dart.js": "7098f998a57b27ca68b5581be9268bad",
"manifest.json": "6da99c4a1feb9094fe89da61eac09a4c",
"version.json": "e70974178656494e9c7b2d784aca4dfb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
