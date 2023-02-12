import { pgsql } from "../src/Database/postgresConnection"
import { insert, getAll } from "../src/Entities/queryModel"

type Test = {
  testing1: string,
  testing2: string,
}

async function test () {
  try{
    const { rows: data } = await pgsql.query(getAll.by.mostRecent.Blog())

    // console.log("Test result: ", test);

    console.log("Data: ", data);

    return data;

  } catch(err) {
    console.log("Test error: ", err);
  }
}

async function test2(): Promise<void> {
  try {

    const result = await test();

    console.log("Result: ", result);
  } catch(err) {

  }
}

async function test3() {
  try {

    const post4 =   {
      post_title: "Test Blog 4",
      picture: "placeholder_url_4",
      blog: "Test Blog 4 content",
      date_posted: (new Date()).toISOString()
    };

    const res = await pgsql.query(insert.to.Blog(post4));

    console.log(res)
  } catch(err) {

  }
}

test3();
