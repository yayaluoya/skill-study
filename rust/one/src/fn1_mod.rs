use rand::Rng;
use std::cmp::Ordering;
use std::io;

/**
 * 猜数字游戏示例
 */
pub fn fn1() {
    println!("（1-100）的猜数字游戏！");

    let secret_number = rand::thread_rng().gen_range(1..101);

    loop {
        println!("请输入你猜的数字：");

        let mut guess = String::new();

        io::stdin()
            .read_line(&mut guess)
            .expect("读取用户输入错误！");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => {
                println!("请输入数字！");
                continue;
            }
        };

        println!("你猜的数字是：{}", guess);

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("猜小了！"),
            Ordering::Greater => println!("猜大了！"),
            Ordering::Equal => {
                println!("猜对了");
                break;
            }
        }
    }
}
