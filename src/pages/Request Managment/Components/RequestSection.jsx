"use client";

import { motion, AnimatePresence } from "framer-motion";
import RequestItem from "./RequestItem";
import SectionHeader from "./SectionHeader";

const RequestSection = ({ title, sectionKey, requests, isExpanded, onToggleSection }) => {
  return (
    <>
      <SectionHeader
        title={title}
        count={requests.length}
        section={sectionKey}
        isExpanded={isExpanded}
        onToggle={onToggleSection}
      />
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="request-section"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden p-4"
          >
            <div className="border border-gray-200 rounded-lg">
            {requests.map((request, index) => (
              <RequestItem key={index} request={request} section={sectionKey} showBottomBorder={index !== requests.length - 1} />
            ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RequestSection;
