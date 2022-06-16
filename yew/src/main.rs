use yew::prelude::*;

enum Msg {
    AddOne,
    ChText,
    ThingCopied,
    ThingDropped,
    ThingDragged,
    ThingClicked,
    ThingOver,
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
            Msg::ThingCopied => {
                self.on_input_test = String::from("copied");
                true
            }
            Msg::ThingDragged => {
                self.on_input_test = String::from("dragged");
                true
            }
            Msg::ThingDropped => {
                self.on_input_test = String::from("dropped");
                true
            }
            Msg::ThingClicked => {
                self.on_input_test = String::from("clicked");
                true
            }
            Msg::ThingOver => {
                self.on_input_test = String::from("over");
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
                <input type="text" placeholder="he he he haw" oninput={link.callback(|_| Msg::ChText)} />
                <p 
                onclick = {link.callback(|_| Msg::ThingClicked)} 
                oncopy={link.callback(|_| Msg::ThingCopied)}
                ondrag={link.callback(|_| Msg::ThingDragged)}
                ondrop={link.callback(|_| Msg::ThingDropped)}
                onmouseover={link.callback(|_| Msg::ThingOver)}
                >
                { format!("{} {}", &self.on_input_test, &self.input_counter) }
                </p>
            </div>
        }
    }
}

fn main() {
    yew::start_app::<Model>();
}