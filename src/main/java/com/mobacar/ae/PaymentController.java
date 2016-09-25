package com.mobacar.ae;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/payment")
public class PaymentController {

  
  @RequestMapping(method = RequestMethod.POST)
  public PaymentDTO addItem(@RequestBody PaymentDTO payment) {
    return payment;
  }
  
  
  @RequestMapping(value="/settle",method = RequestMethod.POST)
  public PaymentDTO settle(@RequestBody PaymentDTO payment) {
    return payment;
  }
  
  @RequestMapping(value="/refund",method = RequestMethod.POST)
  public PaymentDTO refund(@RequestBody PaymentDTO payment) {
    return payment;
  }
  

  
}
