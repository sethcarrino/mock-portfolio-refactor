import React, {Component} from 'react';

class Contact extends Component {

  render() {

    return (
      <div>
        <div className="jumbotron title-bg">
          <h1 className="title">Want to Chat?</h1>
          <h3 className="sub-title">get in touch</h3>
        </div>
        <div className="about-content">
          <p><span>Phone:</span> 555-555-5555</p>
          <p><span>Email:</span> randomemailuser@random.net</p>
          <p><span>Address</span> 123 Made Up Lane</p>

          <p>
          <a href="https://github.com/sethcarrino">GitHub</a> | <a href="mailto:sethcarrino@gmail.com">Email</a> | <a href="https://twitter.com/sethcarrino">Twitter</a>
          </p>

          <p>Cliche street art direct trade, truffaut farm-to-table adaptogen knausgaard aesthetic swag kogi whatever put a bird on it synth quinoa. Artisan pug helvetica letterpress, keytar chia fanny pack selvage austin XOXO narwhal kogi. Selvage ethical leggings offal heirloom cray tbh brunch pop-up. Put a bird on it coloring book hammock, freegan tofu letterpress blue bottle aesthetic cardigan taxidermy seitan tumeric. Etsy lumbersexual next level green juice, edison bulb chia franzen brooklyn man bun jean shorts hella authentic. Put a bird on it four loko post-ironic, gluten-free tattooed fanny pack pork belly PBR&B. Fam gastropub venmo asymmetrical air plant pinterest. Twee gentrify copper mug PBR&B gochujang enamel pin tattooed la croix hammock subway tile. Ugh four loko plaid, mumblecore artisan flannel hoodie +1 typewriter seitan tofu food truck letterpress selvage palo santo.</p>
        </div>
        </div>
      );
    }
  }

  export default Contact;
