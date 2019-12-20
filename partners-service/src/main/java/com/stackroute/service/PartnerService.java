package com.stackroute.service;

import com.stackroute.model.Partner;

import java.util.List;

public interface PartnerService {
    List<Partner> getAllPartners();
    boolean addAPartner(Partner partner);
}
