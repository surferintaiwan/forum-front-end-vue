<template>
  <div class="container py-5">
    <!-- AdminNav Component -->

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user.id">
          <th scope="row">{{user.id}}</th>
          <td>{{user.email}}</td>
          <td v-if="user.isAdmin">admin</td>
          <td v-else>user</td>
          <td v-if="currentUser.id !== user.id">
            <button v-on:click="handleChangeRole(user.id)" v-if="user.isAdmin" type="button" class="btn btn-link">set as user</button>
            <button v-on:click="handleChangeRole(user.id)" v-else type="button" class="btn btn-link">set as admin</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
      isAdmin: true,
      image: null,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-03-02T17:09:40.000Z"
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
      isAdmin: false,
      image: null,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-03-05T12:30:53.000Z"
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$VHKmtPqbcUzK46qxLllqj.w506U2N2TObMmnpdlNG2CLZPa1xzuTi",
      isAdmin: false,
      image: null,
      createdAt: "2020-02-28T14:38:32.000Z",
      updatedAt: "2020-03-02T16:01:50.000Z"
    },
    {
      id: 62,
      name: "AC",
      email: "ac@ac.com",
      password: "$2a$10$yB01LxQAujWjRQ0WaprYV.t5SDx6kool5Cmrt0F7TRSXGRk.W8z1m",
      isAdmin: false,
      image: null,
      createdAt: "2020-02-29T15:41:09.000Z",
      updatedAt: "2020-02-29T15:41:09.000Z"
    },
    {
      id: 72,
      name: "mohammad akhbarati",
      email: "makhbarati@gmail.com",
      password: "$2a$10$ljaWKqtQwgLA5BdTEhBTHeJK/Ku4ow3IHM4S5OJYmr7.anBAIl7NW",
      isAdmin: false,
      image: null,
      createdAt: "2020-02-29T23:24:32.000Z",
      updatedAt: "2020-02-29T23:24:32.000Z"
    },
    {
      id: 82,
      name: "aaa",
      email: "aaa@aaa",
      password: "$2a$10$tKDZYhuLyqqwiWqILKWygewD8m9w8LXtMVux1iRaa8CMVsWJa5ma.",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-08T14:50:18.000Z",
      updatedAt: "2020-03-08T14:50:18.000Z"
    },
    {
      id: 92,
      name: "asdasd",
      email: "asdasd@asdasd.asdasd",
      password: "$2a$10$J4Z/hkxNtpZYM0mj/eCaM.bBRTtTC4yOwISf4d..ia9sdB0ym/9yO",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-08T17:38:03.000Z",
      updatedAt: "2020-03-08T17:38:03.000Z"
    },
    {
      id: 102,
      name: "asd@asd.asd",
      email: "asd@asd.asd",
      password: "$2a$10$r9jgmPQGI2uN59XwkuTiX.qRORpqYDoMg8e36WJ.bw1JexPvpXVp.",
      isAdmin: false,
      image: "https://i.imgur.com/yJTFCDh.jpg",
      createdAt: "2020-03-09T06:15:49.000Z",
      updatedAt: "2020-03-09T06:16:09.000Z"
    },
    {
      id: 112,
      name: "測試",
      email: "123@example.com",
      password: "$2a$10$oJlwrpCT8jAC2Kamet775u3kNbd.SV85yvHH9c/L2bKODZ437Cn/K",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-12T15:28:49.000Z",
      updatedAt: "2020-03-12T15:28:49.000Z"
    },
    {
      id: 122,
      name: "user999",
      email: "user999@example.com",
      password: "$2a$10$ggSKzmB0Zf02M3bX5sJwc.oKeL.EyQgKBa99sRpNWi8Eqov6Cm0Xa",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-17T07:23:13.000Z",
      updatedAt: "2020-03-17T07:23:13.000Z"
    },
    {
      id: 132,
      name: "user888",
      email: "user888@example.com",
      password: "$2a$10$mOIkAG2UZ8jw5ErEUvtMneVkV.EDl71R9Ec1Va2wMymR5tCMyU3ve",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-17T07:50:53.000Z",
      updatedAt: "2020-03-17T07:50:53.000Z"
    },
    {
      id: 142,
      name: "user888",
      email: "user888@123.com",
      password: "$2a$10$c3.Mbs29E1s320x8zBZeGOF7csa0udo/wkht1sOPuNAPTTtw/YEUu",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-17T07:54:09.000Z",
      updatedAt: "2020-03-17T07:54:09.000Z"
    },
    {
      id: 152,
      name: "user777",
      email: "user777@example.com",
      password: "$2a$10$z6NW4BS/QVlChCPCESgK1OcmLNfgi1EocyEH3IzUVzu5zyIopyopC",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-17T08:03:35.000Z",
      updatedAt: "2020-03-17T08:03:35.000Z"
    },
    {
      id: 162,
      name: "test",
      email: "test@test.com",
      password: "$2a$10$HzCWQezkOs9jCssiW7tjD.tYyMrX0iVxpx.cx4vWJxqlbWZMREFm2",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-22T09:35:11.000Z",
      updatedAt: "2020-03-22T09:35:11.000Z"
    },
    {
      id: 172,
      name: "a",
      email: "a26620236@gmail.com",
      password: "$2a$10$hRVJ4Mr6uAlWj3I9q7a4G.Ghavo.ra5jmEvH6GY37rewVqg0fkxoS",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-23T10:29:12.000Z",
      updatedAt: "2020-03-23T10:29:12.000Z"
    },
    {
      id: 182,
      name: "lim jianhang",
      email: "nerflim@gmail.com",
      password: "$2a$10$Qz1PP5vYpcBwzCeaLELCiujLjId7SSyLUiyfP2TtM8suafrsAHGmW",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-23T15:21:31.000Z",
      updatedAt: "2020-03-23T15:21:31.000Z"
    },
    {
      id: 192,
      name: "Joey",
      email: "joeytan030306@gmail.com",
      password: "$2a$10$h63NLEefacJQPJ1xsAoMlu3zS0e9vn7lnezl6o9gQ0EAMvT9NrBrm",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-23T15:21:43.000Z",
      updatedAt: "2020-03-23T15:21:43.000Z"
    },
    {
      id: 202,
      name: "Agnes",
      email: "405322605@mail.fju.edu.tw",
      password: "$2a$10$4cBLm1YQI2NuWIfDDA/5YeTtINhe.m7NrnFCI044I9AYSZBDEWaqy",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-24T00:32:41.000Z",
      updatedAt: "2020-03-24T00:32:41.000Z"
    },
    {
      id: 212,
      name: "jerry",
      email: "sccwcc106@gmail.com",
      password: "$2a$10$WJvYYwgXFeyqo86OX.bLDuXNN4XRmh4KOjJyuHvDEn6yxl.v4uQoS",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-24T14:04:29.000Z",
      updatedAt: "2020-03-24T14:04:29.000Z"
    },
    {
      id: 222,
      name: null,
      email: "roott@expample.com",
      password: "$2a$10$q0vuZo.FC1C.j4g.q34kTuWIMbiDGRnW8CQfa2/iaTdfktDBRT5xq",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-24T16:35:42.000Z",
      updatedAt: "2020-03-24T16:35:42.000Z"
    },
    {
      id: 232,
      name: "wbh",
      email: "ReadingExchange@163.com",
      password: "$2a$10$1h2OE3ZFUTR6Lr9bojp4ee2fxUBya/NpkwveJNxpe7h2JeFe6eb0a",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-25T15:53:23.000Z",
      updatedAt: "2020-03-25T15:53:23.000Z"
    },
    {
      id: 242,
      name: "abc",
      email: "abc@abc",
      password: "$2a$10$seMk2.DnlqD708UVY3SAtuFpQcGMa9TwwR0BuHzeennUFxIBk1LnC",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-26T08:03:08.000Z",
      updatedAt: "2020-03-26T08:03:08.000Z"
    },
    {
      id: 252,
      name: "abc2",
      email: "abc@abc2",
      password: "$2a$10$pIOhVJRAxBlK.KSkHWCVQeewHAYIRx.kwQuMxsFs4fa1lpgXK4X0i",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-26T08:17:51.000Z",
      updatedAt: "2020-03-26T08:17:51.000Z"
    },
    {
      id: 262,
      name: "abc3",
      email: "abc@abc3",
      password: "$2a$10$7V2m5qZNLuEJNMvxOJdR9eFrcye9E1.rKeHPHPSO2.1NO/Ao8ej92",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-26T08:20:22.000Z",
      updatedAt: "2020-03-26T08:20:22.000Z"
    },
    {
      id: 272,
      name: "abc4",
      email: "abc@abc4",
      password: "$2a$10$0Xb6KAJqFpyTL6TwCTGI8uRhlkbnfl11WsqDVIyQW.FGno21FN9h.",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-26T08:21:47.000Z",
      updatedAt: "2020-03-26T08:21:47.000Z"
    },
    {
      id: 282,
      name: "test",
      email: "test@test",
      password: "$2a$10$GcVlOi3hxPswn.KKehlVruWFoSuZXShWPY70cU2ixyPimdUoElXci",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-27T10:39:11.000Z",
      updatedAt: "2020-03-27T10:39:11.000Z"
    },
    {
      id: 292,
      name: "test1",
      email: "test1@test",
      password: "$2a$10$0ChHNZrj8fuzuEl1oxm9deFu17i3wMHuXJbAG3lU55bk5e5FvL2VW",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-27T10:42:32.000Z",
      updatedAt: "2020-03-27T10:42:32.000Z"
    },
    {
      id: 302,
      name: "test11",
      email: "test11@test",
      password: "$2a$10$RwJxX/2t1Y2nPyElnSyEKe00XCTt7i54G.WUYDrlRgqYftA.6gUGm",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-27T10:47:49.000Z",
      updatedAt: "2020-03-27T10:47:49.000Z"
    },
    {
      id: 312,
      name: "test100",
      email: "test100@example.com",
      password: "$2a$10$.RYrFGtoUIgzwzxAHnNz2uR6MVbwmyvtPTcQwPWyHZDlGGYWFpiVS",
      isAdmin: false,
      image: null,
      createdAt: "2020-03-30T04:53:36.000Z",
      updatedAt: "2020-03-30T04:53:36.000Z"
    }
  ]
};

const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true
  },
  isAuthenticated: true
};

export default {
  data: function() {
    return {
      users: [],
      currentUser: {}
    };
  },
  created: function() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.users = dummyData.users;
      this.currentUser = dummyUser.currentUser
    },
    handleChangeRole(userId) {
        this.users = this.users.map(user => {
            if (user.id === userId) {
                return {
                    ...user,
                    isAdmin : !user.isAdmin
                }
            }
            return user
        })
    }
  }
};
</script>