

<style>
  .honeypot-fields {
    display: none;
  }
  .vendor-registration .grid {
    justify-content: center;
  }
  .vendor-registration .grid__item {
    width: unset;
  }
  .grid.grid--half-gutters {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .vendor-registration .grid__item.medium-up--one-half, .vendor-registration .grid__item.medium-up--two-half {
    width: 100%;
    max-width: unset;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .grid__item.medium-up--one-half input{
    width: 100%;
    outline: none;
    box-shadow: none;
  }
  .title {
    display: none !important;
  }
  .phone-number-input {
    display: flex;
    align-items: center;
  }
  .phone-number-input .js-qty {
    max-width: unset;
    width: 100%;
  }
  .phone-number-input select {
    margin: 0;
    margin-right: 10px;
    width: 30%;
  }
  #country_code {
    margin-bottom: 19.44444px;
  }
  label span {
    color: red;
  }
  a:focus, a:hover {
    color: unset;
  }
  @media    screen and (max-width: 567px) {
    .grid.grid--half-gutters {
      grid-template-columns: 1fr;
    }
  }
</style>
<div class="vendor-registration">
<div class="page-width">
  <div class="grid">
    <div class="grid__item medium-up--five-sixths medium-up--push-one-twelfth">
      <div class="section-header text-center">
        <h1>Welcome to bunamo marketplace </h1>
      </div>
      
      <div>
        <span>Hi! We would love to have you sell with us. To register, please fill the form below.</span><br/>
        <span>We will get in touch with you soon.</span>
      </div>

      <div class="contact-form form-vertical">
        <form name="VendorForm" id="vendorForm" onsubmit="return submitForm()" action="https://api-v2.shipturtle.com/api/v1/vendor/registration" method="POST" enctype="multipart/form-data">
          <div class="grid grid--half-gutters">
            <div class="grid__item medium-up--one-half title">
              <label for="title">Title <span aria-hidden="true">*</span></label>
              <input type="text" id="title" name="title" autocomplete="off" tabindex="-1" value="st_title">
            </div>
            <div class="grid__item medium-up--one-half">
              <label for="company">Company name <span aria-hidden="true">*</span></label>
              <input type="text" id="company" name="company_name" required>
            </div>
            <div class="grid__item medium-up--one-half">
              <label for="brand_name">Brand name</label>
              <input type="text" id="brand_name" name="brand_name">
            </div>
            <div class="grid__item medium-up--one-half">
              <label for="website">Website</label>
              <input type="text" id="website" name="website">
            </div>
            <div class="grid__item medium-up--one-half">
              <label for="contact">Contact name <span aria-hidden="true">*</span></label>
              <input type="text" id="contact" name="contact_name" required>
            </div>
            <div class="grid__item medium-up--one-half">
              <label for="phone">Phone</label>
              <div class="phone-number-input">
                <select value="" name="mobile_code" id="country_code">
                </select>
                <input type="number" id="phone" name="phone_number"> 
              </div>
            </div>
            <div class="grid__item medium-up--one-half">
              <label for="email">Email <span aria-hidden="true">*</span> </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                autocorrect="off"
                autocapitalize="off"
                aria-required="true"
              >
            </div>
            <div class="grid__item medium-up--one-half">
              <label for="address_line_1">Address line 1</label>
              <input type="text" id="address_line_1" name="address_line_1">
            </div>
            <div class="grid__item medium-up--one-half">
              <label for="address_line_2">Address line 2</label>
              <input type="text" id="address_line_2" name="address_line_2">
            </div>
            <div class="grid__item medium-up--one-half"> 
              <label for="country">Country</label> 
              <select name="country" id="country" onchange="updateCountry(this);">
                <option value="">Select Country</option>
              </select>
            </div> 
            <div class="grid__item medium-up--one-half"> 
              <label for="state_province">State/Province</label> 
              <select name="state_code" id="state_province">
                <option value="">Select State/Province</option>
              </select>
            </div> 
            <div class="grid__item medium-up--one-half">
              <label for="city">City</label>
              <input type="text" id="city" name="city">
            </div>
            <div class="grid__item medium-up--one-half">
              <label for="pin_code">Zip code/Pin code</label>
              <input type="text" id="pin_code" name="pin_code">
            </div>
            <div class="grid__item medium-up--two-half" style="display: none;">
              <label for="notes">Notes</label>
              <textarea name="notes" id="st_notes"></textarea>
            </div>
            <div class="grid__item medium-up--two-half">
              <label for="logo">Upload Documents</label>
              <input type="file" id="logo" name="logo[]" multiple>
            </div>
          </div>
          <input type="hidden" name="company_id" value="826465">
          <input type="hidden" name="shop_id" value="7793">
          <input type="hidden" name="honeypot_enabled" value="true">
          <div class="honeypot-fields">
            <input type="text" id="honeypotNameFieldName" name="honeypot_name_field_name">
            <input type="text" id="honeypotValidFromFieldName" name="honeypot_valid_from_field_name">
          </div>

          <input type="submit" class="btn" value="Join now">
        </form>
        <div>
                      <span><a href="https://app.shipturtle.com/user/login" target="_blank">Already a seller? Click here to login</a></span>
                  </div>
      </div>
    </div>
  </div>
</div>
</div>
<script src="{{'countries-states.js'| asset_url }}" defer></script>
<script type="text/javascript">
  function submitForm() {
    const stNote = document.getElementById('st_notes');
    const elements = document.getElementsByClassName('additional-fields')
    let notes = stNote.value ? '\n\n' : '';
    for (const element of elements) {
      const label = element.previousElementSibling.dataset
      if (label.additionalFields) {
        notes= notes + label.additionalFields + ': ' + element.value + '\n';
      }
    }
    stNote.value += notes;
    return  true;
  }

  updateCountry = function (country) {
    document.getElementById("state_province").innerHTML = null;
    let states;
    statesData.some((data) => {
        if(data.iso2 === country.value) {
          states = data.states;
          return true;
        }
    })
    callbackmethodstate(states);
  };
  function callbackmethod (data) {
    if (data) {
      let country = document.getElementById('country');
      let countryCode = document.getElementById('country_code');
      data.forEach( function (value, index) {
        let option = document.createElement("option");
        option.value = value.code;
        option.text = value.name;
        country.appendChild(option);
        let countryCodeoption = document.createElement("option");
        countryCodeoption.value = value.dial_code;
        countryCodeoption.text = value.dial_code + " - (" + value.name + ")";
        countryCode.appendChild(countryCodeoption);
      });
    }
  }
  function callbackmethodstate (data) {
    let stateProvince = document.getElementById('state_province');
    if (data) {
      data.forEach( function (value, index) {
        let stateoption = document.createElement("option");
        stateoption.value = value.state_code;
        stateoption.text = value.name;
        stateProvince.appendChild(stateoption);
      });
    }
  }
  async function getHoneyPot () {
    const res = await fetch('https://api-v2.shipturtle.com/api/v2/honeypot-data');
    const { honeypot } = await res.json()

    const honeypotNameFieldName = document.getElementById('honeypotNameFieldName');
    const honeypotValidFromFieldName = document.getElementById('honeypotValidFromFieldName');
  
    honeypotNameFieldName.setAttribute('name', honeypot.nameFieldName);
    honeypotNameFieldName.setAttribute('id', honeypot.nameFieldName);
    
    honeypotValidFromFieldName.setAttribute('name', honeypot.validFromFieldName)
    honeypotValidFromFieldName.value = honeypot.encryptedValidFrom
     
  }
  getHoneyPot()
  document.addEventListener("DOMContentLoaded", function() {
    var sc = document.createElement("script");
    callbackmethod(countryData);
  })
</script>