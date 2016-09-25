package com.mobacar.ae;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/revervation")
public class ReservationController {

  
  @RequestMapping(method = RequestMethod.POST)
  public RecordBooking addItem(@RequestBody RecordBooking record) {
    return record;
  }
  
}
