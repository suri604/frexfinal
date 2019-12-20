package com.stackroute.service;

import com.stackroute.model.Partner;
import com.stackroute.repository.PartnerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PartnerServiceImpl implements PartnerService {

    private PartnerRepository partnerRepository;

    @Autowired
    PartnerServiceImpl(PartnerRepository partnerRepository) {
        this.partnerRepository = partnerRepository;
    }

    @Override
    public List<Partner> getAllPartners() {
        return partnerRepository.findAll();
    }

    @Override
    public boolean addAPartner(Partner partner) {
        partnerRepository.save(partner);
        return true;
    }
}
