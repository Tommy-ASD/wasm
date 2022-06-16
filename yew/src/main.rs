use yew::prelude::*;

enum Msg {
    AddOne,
    ChText,
}

struct Model {
    value: i32,
    on_input_test: String,
    input_counter: i32,
}

impl Component for Model {
    type Message = Msg;
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Self {
            value: 0,
            on_input_test: String::from("Hello, world!"),
            input_counter: 0,
        }
    }

    fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {
            Msg::AddOne => {
                self.value += 1;
                // the value has changed so we need to
                // re-render for it to appear on the page
                true
            }
            Msg::ChText => {
                self.on_input_test = String::from("inputed");
                self.input_counter += 1;
                true
            }
        }
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        // This gives us a component's "`Scope`" which allows us to send messages, etc to the component.
        let link = ctx.link();
        html! {
            <div>
                <button onclick={link.callback(|_| Msg::AddOne)}>{ "+1" }</button>
                <p>{ self.value }</p>
                <input type="text" value="he he he haw" oninput={link.callback(|_| Msg::ChText)} />
                <p>{ format!("{} {}", &self.on_input_test, &self.input_counter) }</p>
            </div>
        }
    }
}

fn main() {
    yew::start_app::<Model>();
}