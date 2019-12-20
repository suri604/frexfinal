package com.stackroute.controller;

import com.stackroute.model.Partner;
import com.stackroute.service.PartnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//@CrossOrigin(origins = "http://localhost:4200")
@CrossOrigin("*")
@RestController
@RequestMapping("/api/")
public class PartnerController {

    private PartnerService partnerService;

    @Autowired
    public PartnerController(PartnerService partnerService) {
        this.partnerService = partnerService;
    }

    @GetMapping("getAllPartners")
    public ResponseEntity getAllPartners() {
        return ResponseEntity.ok(partnerService.getAllPartners());
    }

    @PostMapping("/addAPartner")
    public ResponseEntity saveUser(@RequestBody Partner partner) {
        boolean created = partnerService.addAPartner(partner);
        if(created) {
            return new ResponseEntity<>("created ok", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("couldnt create", HttpStatus.CONFLICT);
        }
    }

//    @PutMapping("/addproduct/{companyname}")
//    public ResponseEntity saveProduct(@PathVariable("companyname") String companyname, @RequestBody String productUrl) {
//        List<Partner> partners = partnerService.getAllPartners();
//        int x = 0;
//        for (partners i : partners) {
//             accessing each element of array
//            x++;
//            if (i.getonsubmitCompanyName().equals(companyname)) {
//                break;
//            }
//        }
//
//        partners selecteduser = partners.get(x);
//        selecteduser.setProductUrl(productUrl);
//        userRepository.save(selecteduser);
//
//        ResponseEntity responseEntity;
//        responseEntity = new ResponseEntity<String>("Successfully Created", HttpStatus.CREATED);
//        return responseEntity;
//    }
//
//    @PutMapping("/addcouponcode/{companyname}")
//    public ResponseEntity<?> saveCoupon(@PathVariable("companyname") String companyname, @RequestBody String couponcode) {
//
//        userRepository.save(users);
//
//        List<Users> Users = userRepository.findAll();
//        int x = 0;
//        for (Users i : Users) {
//             accessing each element of array
//            x++;
//            if (i.getCompanyName().equals(companyname)) {
//                break;
//            }
//        }
//
//        Users selecteduser = Users.get(x);
//        selecteduser.setCouponCode(couponcode);
//        userRepository.save(selecteduser);
//
//        ResponseEntity responseEntity;
//        responseEntity = new ResponseEntity<String>("Successfully Created", HttpStatus.CREATED);
//        return responseEntity;
//    }
//
//    @DeleteMapping("delete/{companyname}")
//    public ResponseEntity deleteTrack(@PathVariable("companyname") String companyname) {
//        ResponseEntity responseEntity;
//        List<Users> Users = userRepository.findAll();
//        int x = 0;
//        for (Users i : Users) {
//
//             accessing each element of array
//            x = i.getId();
//            if (i.getCompanyName().equals(companyname)) {
//                break;
//            }
//        }
//
//        try {
//            userRepository.deleteById(x);
//            responseEntity = new ResponseEntity<>(userRepository.findAll(), HttpStatus.CREATED);
//        } catch (Exception ex) {
//            responseEntity = new ResponseEntity(ex.getMessage(), HttpStatus.CONFLICT);
//        }
//        return responseEntity;
//    }
//
//    @GetMapping("/getpartners")
//    public List<String> getPartners() {
//        List<Users> Users = userRepository.findAll();
//        List<String> companyname = new ArrayList<>();
//        int j = 0;
//        for (Users i : Users) {
//            companyname.add(i.getCompanyName());
//            j++;
//        }
//        return companyname;
//    }

}
